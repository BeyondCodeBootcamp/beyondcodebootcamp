"use strict";

var fs = require("fs").promises;
var args = process.argv.slice(2);
var tplname = args[0];
var filename = args[1];

// 1. Download from URL of Markdown file
// 2. Convert to HTML
// 3. Make Prettier
// 4. Template out

async function main() {
    var tpl = await fs.readFile(tplname, "utf8");
    var tpls = tpl.split(/{{card}}/);
    var head = tpls.shift();
    var body = tpls.shift();
    var foot = tpls.shift();

    if (tpls.length) {
        console.error("Too many {{code}} blocks");
        process.exit(1);
    }

    var contents = await fs.readFile(filename, "utf8");
    //console.debug(head, body, foot);
    //console.debug(contents);
    var cards = contents
        .trim()
        .split(/<h1>/g)
        .slice(1)
        .map(function (card) {
            var parts = card.split(/<\/h1>/g);
            var subject = parts.shift();
            //console.debug("SUBJECT:", subject);

            parts = parts.shift().split(/<\/h2>/g);
            var symbol = parts.shift().replace("<h2>", "").trim();
            //console.debug("SYMBOL:", symbol);
            //console.debug("PARTS:", parts);

            parts = parts.shift().split(/<\/h6>/g);
            var tags;
            if (parts.length > 1) {
                tags = parts.shift().replace("<h6>", "").trim();
            }

            var examples = parts.shift();

            return body
                .replace(/{{subject}}/g, subject)
                .replace(/{{symbol}}/g, symbol)
                .replace(/{{tags}}/g, tags)
                .replace(/{{examples}}/g, examples);
        });
    console.info(head);
    console.info(cards.join("\n"));
    console.info(foot);
}

main();
