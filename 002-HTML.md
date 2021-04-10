# HTML - Language Overview

> If HTML were a written language, it would be just the letters. \
> If HTML were paint-by-numbers artwork, it would be the canvas.

```html
<html>
    <body style="font: sans">
    <!-- nothing to see yet -->
    &lt;Hello &amp; Goodbye!&gt; &#x2665;
    </body>
</html>
```

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fodditymall.com%2Fincludes%2Fcontent%2Fupload%2Fadult-paint-by-numbers-kit-8321.gif&f=1&nofb=1)

- What HTML is
  - Example 
- What HTML is _not_
  - Styles
  - Scripts
  - DOM
- "Semantic" HTML

## What is HTML?

HTML is a "markup" language - which basically means that it's a language for writing messages, books, and research papers.

> HTML doesn't do much of anything on its own, but it creates a place for other things to go.

HTML was intended for the web of papers being shared by researchers, not the world of web apps as we know it today.

In today's web it is the "scaffolding". \
You can think of it as the initial lines and numbers of a paint-by-numbers canvas - it gives other things a place to go.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoloringhome.com%2Fcoloring%2Faie%2FRRy%2FaieRRyoxT.gif&f=1&nofb=1)

### The smallest language

It is an extremely small language - smaller than any other language you'll learn.

In fact, there are less than 10 things to learn:

| # | HTML _thing_    | Looks like...                                                                           |
| - | --------------- | --------------------------------------------------------------------------------------- |
| 1 | HTML definition | `<!DOCTYPE html>` <br>(exactly this)                                                    |
| 2 | Text            | Literally, whatever... <br>(cats jumps on keyboard => valid html)                       |
| 3 | Tags            | `<foo />` or `<foo></foo>` <br>(angle brackets)                                         |
| 4 | Attributes      | `<foo bar="baz" />` <br>(the `bar="baz"` part)                                          |
| 5 | Comments        | `<!-- literally, whatever... -->` <br>(begins with `<!-- `, doesn't ends until ` -->`)  |
| 6 | Escapes         | `&amp;` or `&#x2665;` <br>(a few dozen by name, thousands by number)                    |
| . | ...             | ...                                                                                     |
| 7 | exceptions      | `<script>`, `<style>`, `<svg>` and a few others are treated special <br>(like comments) |

Likewise...

| Syntax                 | Use                      |
| ---------------------- | ------------------------ |
| `<!DOCTYPE html>`      | Defines the type of html |
| `<tag></tag>`          | HTML tag                 |
| `<tag />`              | Self-closing HTML tag    |
| `<tag attr="value">`   | Tag attributes           |
| `&copy;`<br>`&#x2665;` | HTML escape              |
| `<!-- comment -->`     | Comment block            |
| `Plain Text`           | Everything else is text  |

### Rules

1. Do nothing for `<!DOCTYPE html>`
2. If you see `<!-- ` (including the space) ignore everything until ` -->`
3. If you see a tag, make a mental note of it.
5. If you see one of the exceptional tags, ignore (including other special tags and comments) until the closing tag

### HTML Example

```html
<html>
    <body style="font: sans">
    <!-- nothing to see yet -->
    &lt;Hello &amp; Goodbye!&gt; &#x2665;
    </body>
</html>
```

## What it is _not_

1. **NOT** a programming language.
   You cannot add numbers. You cannot create a loop. Absolutely **no** programming.
2. **NOT** used to specify _how_ something should look.
   You do not color, shape, or size something with HTML (exception: email)
3. **NOT** something to brag about.
   If you knew what HTML was, you wouldn't put it on your resume. \
   (and if you knew enough to brag about, no one reading would understand)

Specifically, HTML is NOT:
- DOM
- JavaScript, WebGL, or Web Assembly
- CSS or SVG

It is a language, but it isn't "code". You cannot use it to add 
The **entire language**, in a nutshell

### CSS

CSS provides instruction for the:
- shape
- size
- color
- and appearance

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2F2018%2F07%2Fpaint-by-numbers-9.jpg&f=1&nofb=1)

### JavaScript

JavaScript provides instruction for:
- how to listen
- how to respond
- what to do in between

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fC8PknC5Q3Gvo6miGbL3lQHaEc%26pid%3DApi&f=1)

### DOM = HTML + CSS + JavaScript

The "Document Object Model" is a fancy word for... Web App.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb2%2F9e%2Ff3%2Fb29ef366942e4b8a2a9b73068e414a5f.gif&f=1&nofb=1)

## Semantic HTML

For the most part, HTML has **no well-defined meaning**.

There are many guidelines and common conventions, and when you follow the guidelines that is called "semantic HTML".

| Tag            | Semantic Usage                                                                        |
| -------------- | ------------------------------------------------------------------------------------- |
| `<ul>`         | **U**nordered **L**ist <br>(a bullet, or unlabeled, list)                             |
| `<ol>`         | **O**rdered **L**ist <br>(a numbered, lettered, or otherwise labeled list)            |
| `<li>`         | **L**ist **I**tem <br>(a simple item, such as short text or small image, in sequence) |
| `<table>`      | Spreadsheet-like data, organized in a fairly straight-forward copy-paste fashion      |
| `<section>`    | A well-defined portion of text, such as "Section 1.2 b" in a text book                |
| `<footer>`     | The type of information you'd include at the end of a physical article or book        |
| ...            | ...                                                                                   |
| _much more_    | There are dozens of others                                                            |

The primary reason to use semantic HTML is to make it easy for **screen readers** and other assistive technology
(ex: Siri, Google, Safari Reader Mode) understand how to present content to a user **despite your styling**.

See also <https://www.w3schools.com/html/html5_semantic_elements.asp>.

If you actually are familiar with Semantic HTML, then you would be putting words like "Accessibility" and `a11y` on your resume.

For example, when you use `<ul>` and `<li>`

## The Most Important Rule

> If it sounds cool... **DON'T DO IT**!

HTML is boring. Anything that makes it not boring typically breaks web pages and web apps.

Ever tried to load a page on your phone, but you can't get to it because it's scaled wrong
and has so many popups for cookies and subscribe widgets and such that you literally can't
read the information on the page? Cool stuff, huh?

![](https://reductress.com/wp-content/uploads/2015/07/bad-mona-lisa-820x500.jpg)
