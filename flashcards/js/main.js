function $(el, sel) {
    if (!sel) {
        sel = el;
        el = document;
    }
    return el.querySelector(sel);
}

function $$(el, sel) {
    if (!sel) {
        sel = el;
        el = document;
    }
    return el.querySelectorAll(sel);
}

(function () {
    "use strict";

    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&"); // $& means the whole matched string
    }

    // TODO state
    var Cards = {
        deck: [],
        cur: null,
        used: []
    };

    Cards.init = function init() {
        Cards.deck = shuffle([].slice.apply($$(".js-card")));
        Cards.used = [];
        Cards.deck.forEach(function ($el) {
            //console.log($el);
            //console.log($($el, ".js-symbol"));
            var symbol = $($el, ".js-symbol").innerText.trim();
            var symbols;
            switch (symbol) {
                case "<":
                    symbol = "&lt;";
                    break;
                case ">":
                    symbol = "&gt;";
                    break;
                case "/":
                    symbol = "/";
                    break;
                case "/* */":
                    symbols = ["/*", "*/"];
                    break;
                default:
                // leave be
            }
            if (!symbols) {
                symbols = [symbol];
            }

            var text = $($el, ".js-examples").innerHTML;
            symbols.forEach(function (symbol) {
                console.log("sym", symbol);
                var re = new RegExp(
                    '(<strong class="hint">)?' +
                        escapeRegExp(symbol) +
                        "(<\\/strong>)?",
                    "g"
                );
                //console.log(re);
                //console.log(text);
                console.log("sym:", symbol, re);
                $($el, ".js-examples").innerHTML = text
                    .replace(/<\//g, "<SLASH")
                    .replace(re, '<strong class="hint">' + symbol + "</strong>")
                    .replace(/<SLASH/g, "</");
            });
        });
    };
    Cards.next = function next() {
        var prev = Cards.cur;
        Cards.cur = Cards.deck.pop();
        if (prev) {
            // this is not always enough (in the case of the last card)
            // prev.hidden = true;
            Cards.used.push(prev);
        }
        $$(".js-card").forEach(function ($el) {
            $el.hidden = true;
        });
        if (!Cards.cur) {
            window.alert(
                "Congrats, you've finished. Now try a different mode."
            );
            switch (window.location.hash) {
                case "#learn":
                    $('.js-mode .nav-link[href="#recog"]').click();
                    break;
                case "#recall":
                    $('.js-mode .nav-link[href="#recog"]').click();
                    break;
                case "#recog":
                    $('.js-mode .nav-link[href="#recall"]').click();
                    break;
                default:
                    window.location.hash = "#learn";
            }
            Cards.init();
            prev.hidden = false;
            return;
        }
        Cards.cur.hidden = false;
        $(".js-deck").prepend(Cards.cur);
        console.log(Cards.cur);
    };
    Cards.prev = function prev() {
        if (!Cards.used.length) {
            window.alert("You're at the start, don't stop now!");
            return;
        }

        var next = Cards.cur;
        next.hidden = true;
        Cards.deck.unshift(next);
        Cards.cur = Cards.used.pop();
        Cards.cur.hidden = false;
        $(".js-deck").prepend(Cards.cur);
    };

    async function main() {
        Cards.init();
        Cards.next();

        function onCheat(ev) {
            var $el = ev.target.closest(".card");
            $($el, ".js-subject").hidden = false;
            $($el, ".js-symbol").closest("h2").hidden = false;
            $($el, ".js-examples").hidden = false;
        }

        function onNext(ev) {
            ev.preventDefault();
            Cards.next();
        }

        function onPrev(ev) {
            ev.preventDefault();
            Cards.prev();
        }

        function onMode(ev) {
            console.log(ev.target.id);
            $(".nav-link.active").classList.remove("active");
            ev.target.closest(".nav-link").classList.add("active");
            switch (ev.target.hash) {
                case "#learn":
                    $$(".js-card").forEach(function ($el) {
                        $($el, ".js-subject").hidden = false;
                        $($el, ".js-subject-mode").hidden = true;
                        $($el, ".js-symbol").closest("h2").hidden = false;
                        $($el, ".js-examples").hidden = false;
                        $($el, ".js-cheat").hidden = true;
                    });
                    break;
                case "#recall":
                    $$(".js-card").forEach(function ($el) {
                        $($el, ".js-subject").hidden = false;
                        $($el, ".js-subject-mode").hidden = false;
                        $($el, ".js-symbol").closest("h2").hidden = true;
                        $($el, ".js-examples").hidden = true;
                        $($el, ".js-cheat").hidden = false;
                    });
                    break;
                case "#recog":
                    $$(".js-card").forEach(function ($el) {
                        $($el, ".js-subject").hidden = true;
                        $($el, ".js-subject-mode").hidden = true;
                        $($el, ".js-symbol").closest("h2").hidden = false;
                        $($el, ".js-examples").hidden = false;
                        $($el, ".js-cheat").hidden = false;
                    });

                    break;
                default:
                    window.alert("error");
            }
        }

        $$(".js-next").forEach(function ($el) {
            $el.addEventListener("click", onNext);
        });

        $$(".js-prev").forEach(function ($el) {
            $el.addEventListener("click", onPrev);
        });

        $$(".js-mode .nav-link").forEach(function ($el) {
            $el.addEventListener("click", onMode);
        });

        $$(".js-cheat").forEach(function ($el) {
            $el.addEventListener("click", onCheat);
        });

        switch (window.location.hash) {
            case "#learn":
                $('.js-mode .nav-link[href="#learn"]').click();
                break;
            case "#recall":
                $('.js-mode .nav-link[href="#recall"]').click();
                break;
            case "#recog":
                $('.js-mode .nav-link[href="#recog"]').click();
                break;
            default:
                window.location.hash = "#learn";
        }
    }

    main();
})();
