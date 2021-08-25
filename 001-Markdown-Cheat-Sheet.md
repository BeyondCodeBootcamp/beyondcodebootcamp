- Video: [Beyond Code Live 002 - Intro to (a.k.a. Mastering) Markdown](https://youtu.be/iv1pZKH3c-Q)

# Complete Github Markdown Cheat Sheet

The best parts of the best cheat sheets, in table form! :smiley:

- Best test of skill: [Beyond Code Markdown Challenge](https://gist.github.com/coolaj86/689e2cd8d5ad51f7196b8f23c116f8b1)
- Best interactive tutorial: [commonmark.org/help/tutorial](https://commonmark.org/help/tutorial/)
- Best in-depth guide: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)
- Best support test: [Markdown Support Test](https://gist.github.com/coolaj86/6da3922d3748cf76b68f73f1f5b6d8ac)

## Table of Contents (Mini Cheat Sheet)

| [Headings](#headings) | `### Heading` | <h3>Heading</h3> |
| --------------------- | ----------- | --------- |
| [Inline Formatting](#inline-formatting) | **\*\*bold\*\***<br>_\_italic\__<br>`` `code` `` ```` ``code`` ```` `````` ````code```` ``````<br>\~~strike~\~ |  **bold**<br>_italic_<br>`code` ``code`` ````code````<br>~strike~ |
| [Emoji Shortcodes](#emoji-shortcodes) | `:+1:` | :+1: |
| [Block Formatting](#block-formatting) | `> a famous quote` | <blockquote>a famous quote</blockquote> |
| [Lists](#lists) | `- item one` | <ul><li>item one</li><ul> |
| [Tables](#tables) | <pre>\| Abc \| Def \| Ghi \|<br>\| --- \| --- \| --- \|<br>\| 123 \| 456 \| 789 \|</pre> | <table><thead><tr><th>Abc</th><th>Def</th><th>Ghi</th></tr></thead><tbody><tr><td>123</td><td>456</td><td>789</td></tr></tbody></table> |
| [Links](#links--images) | `https://beyondcodebootcamp.com` | <https://beyondcodebootcamp.com> |
| [Images](#links--images) | `![](https://amazon.com/favicon.ico)` | ![](https://amazon.com/favicon.ico) |
  | [Code Blocks](#code-blocks) | <pre>\`\`\`mkdn<br>\*\*bold\*\* \_italic\_ \`code\`<br>\`\`\`</pre> <pre>\`\`\`\`\`txt<br>\`\`\`mkdn<br>\*\*bold\*\* \_italic\_ \`code\`<br>\`\`\`<br>\`\`\`\`\`<br></pre> Supported tags: js, html, css, mkdn, json, json5, go, rs, vim, sh, and many more... | <pre language="markdown"><code>**\*\*bold\*\*** _\_italic\__ \`code\`</code></pre> <br><br> <pre language="markdown">\`\`\`mkdn <br>\*\*bold\*\* \_italic\_ \`code\` <br>\`\`\` </pre> |
| Horizontal Rule | --- | <hr> |

_Note: That table ^^ is written in Markdown, but contains a lot of escapes and HTML._

## Non-Markdown

There are also a few bits of non-markdown (HTML) that you should know if you're creating
documentation on GitHub:

<details open="open">
  <summary>details</summary>
  <pre><code>
&lt;details open="open">
  &lt;summary>details&lt;/summary>
  Use the &lt;details> tag to create collapsable lists
&lt;/details></code></pre>
</details>
<details open="open">
  <summary>kbd</summary>
  <pre><code>Use &lt;kbd> to create borders around images, or make buttons.

&lt;kbd>&lt;a href="https://example.com/forms/new">Create New Form&lt;/a>&lt;/kbd>
    
&lt;kbd>&lt;img src="https://example.com/screenshot.png" />&lt;/kbd></code></pre>
</details>

## Github Flavored Markdown by Example

_Note: This table is written entirely in pre-rendered HTML_

<table>
  <tr>
    <td><h1>Headings</h1></td>
    <td></td>
  </tr>
  <tr>
    <td>
      # Heading 1
    </td>
    <td>
      <h1>Heading 1</h1>
    </td>
  </tr>
  <tr>
    <td>
      ## Heading 2
    </td>
    <td>
      <h2>Heading 2</h2>
    </td>
  </tr>
  <tr>
    <td>
      ### Heading 3
    </td>
    <td>
      <h3>Heading 3</h3>
    </td>
  </tr>
  <tr>
    <td>
      #### Heading 4
    </td>
    <td>
      <h4>Heading 4</h4>
    </td>
  </tr>
  <tr>
    <td>
      ##### Heading 5
    </td>
    <td>
      <h5>Heading 5</h5>
    </td>
  </tr>
  <tr>
    <td>
      ###### Heading 6
    </td>
    <td>
      <h6>Heading 6</h6>
    </td>
  </tr>
  <tr>
    <td>
      \## Not a heading
    </td>
    <td>
      ## Not a heading
    </td>
  </tr>
  <tr>
    <td>
      <h1>Emoji Shortcodes</h1>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      <span>:</span>+1: <span>:</span>sparkles: <span>:</span>trophy:
    </td>
    <td>
      👍 ✨ :trophy:
    </td>
  </tr>
  <tr>
    <td>
      <span>:</span>tada: <span>:</span>rocket: <span>:</span>metal:
    </td>
    <td>
      🎉 🚀 🤘 
    </td>
  </tr>
  <tr>
    <td>
      &lt;span><span>:</span>&lt;/span>+1:
    </td>
    <td>
      <span>:</span>+1:
    </td>
  </tr>
  <tr>
    <td>
      All shortcodes
    </td>
    <td>
      <ul>
        <li><a href="https://www.webfx.com/tools/emoji-cheat-sheet/">www.emoji-cheat-sheet.com</a></li>
        <li><a href="https://gist.github.com/rxaviers/7360908">Complete List of Github Emojis</a>
        <li><a href="https://api.github.com/emojis">Github's Emoji PNG JSON API</a>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Inline Formatting</h1>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      **bold**
      <br>
      em**bold**en
      <br>
      \*\*bald\*\*
      <br>
      <br>
      _italic_
      <br>
      i*tal*ic
      <br>
      i_tal_ic
      <br>
      i\*tal\*ic
      <br>
      <br>
      ***both***
      <br>
      <br>
      ~strikethrough~
      <br>
      str~ike~through
      <br>
      str\~ike\~through
      <br>
      <br>
      `inline code`
      <br>
      in`li`ne
      <br>
      \`inline backticks\`
      <br>
      ``escaped ` backticks ``` ``
      <br>
      ```` ` `` ``` ````
      <br>
      (use 1, 2, 4, 6, 8, or any even number of backticks for inline code)
      <br><br>
      ***~`all of the above`~***
      <br>
      `***~some of the above~***`
      <br>
      \*\*\*\~\`node of the above\`\~\*\*\*
    </td>
    <td>
      <strong>bold</strong>
      <br>
      em<strong>bold</strong>en
      <br>
      **bald**
      <br><br>
      <em>italic</em>
      <br>
      i<em>tal</em>ic
      <br>
      i_tal_ic
      <br>
      i*tal*ic
      <br><br>
      <strong><em>both</em></strong>
      <br><br>
      <del>strikethrough</del>
      <br>
      str<del>ike</del>through
      <br>
      str~ike~through
      <br><br>
      <code>inline code</code>
      <br>
      in<code>li</code>ne
      <br>
      `inline backticks`
      <br>
      <code>escaped ` backticks ```</code>
      <br>
      <code>` `` ```</code>
      <br>
      &nbsp;
      <br><br>
      <strong><em><del><code>all of the above</code><del></em></strong>
      <br>
      <code>***~some of the above~***</code>
      <br>
      ***~`node of the above`~***
    </td>
  </tr>
  <tr>
    <td>
      <h1>Block Formatting</h1>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      A paragraph of text.
      <br><br>
      A second paragraph,<br>with multiple<br>lines.
    <td>
      <p>A paragraph of text.</p>
      <p>A second paragraph, with multiple lines.</p>
    </td>
  </tr>
  <tr>
    <td>
      A third paragraph, \<br>
      with line \<br>
      breaks.
    </td>
    <td>
      <p>A third paragraph, <br>
        with line <br>
        breaks.</p>
    </td>
  </tr>
  <tr>
    <td>
      > A blockquote
      <br>
      > with attribution - Anonymous
    </td>
    <td>
      <blockquote>A blockquote with attribution - Anonymous</blockquote>
    </td>
  </tr>
  <tr>
    <td>
      > A blockquote \
      <br>
      > with line breaks
    </td>
    <td>
      <blockquote>A blockquote <br>
        with line breaks</blockquote>
    </td>
  </tr>
  <tr>
    <td>
      > a quote
      <br>
      > > within a quote
    </td>
    <td>
      <blockquote>a quote
        <blockquote>within a quote</blockquote></blockquote>
    </td>
  </tr>
  <tr>
    <td>
      \> not a quote
    </td>
    <td>
      > not a quote
    </td>
  </tr>
  <tr>
    <td>
      <h1>Lists</h1>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      - a bulleted (unordered) list
      <br>
      - with multiple items
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;- at multiple nested levels
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- weeee!
    </td>
    <td>
      <ul>
        <li>a bulleted (unordered) list</li>
        <li>with multiple items
          <ul>
            <li>at multiple nested levels
              <ul>
                <li>weeee!</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      1. a numbered (ordered) list
      <br>
      1. with multiple items
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;- including unordered items
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- and nested items
    </td>
    <td>
      <ol>
        <li>a numbered (ordered) list</li>
        <li>with multiple items
          <ul>
            <li>including unordered items
              <ul>
                <li>and nested items</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>
      1. a numbered (ordered) list
      <br>
      1. with multiple items
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;1. with deeply,
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. deeply nested numbers
    </td>
    <td>
      <ol>
        <li>a numbered (ordered) list</li>
        <li>with multiple items
          <ol>
            <li>with deeply,
              <ol>
                <li>deeply, nested numbering</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>
      - [ ] one check
      <br>
      - [ ] two check
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;- no check
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- [x] true check
    </td>
    <td>
      <img src="https://i.imgur.com/LzrbJdL.png"></img>
    </td>
  </tr>
  <tr>
    <td>
      \- not a list \
      <br>
      \- just a paragraph
    </td>
    <td>
      <p>- not a list<br>
        - just a paragraph</p>
    </td>
  </tr>
  <tr>
    <td>
      <h1>Tables</h1>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      <pre>| Left | Center | Right | Default |
| :--- | :----: | ----: | ------- |
| Left | Center | Right | Default |
| 1    | 2      | 3     | 4       |
| -    | -      | -     | Multi-&lt;br>line |
</pre>
    </td>
    <td>
<table>
<thead>
<tr>
<th align="left">Left</th>
<th align="center">Center</th>
<th align="right">Right</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Left</td>
<td align="center">Center</td>
<td align="right">Right</td>
<td>Default</td>
</tr>
<tr>
<td align="left">1</td>
<td align="center">2</td>
<td align="right">3</td>
<td>4</td>
</tr>
<tr>
<td align="left">-</td>
<td align="center">-</td>
<td align="right">-</td>
<td>Multi-<br>line</td>
</tr>
</tbody>
</table>
    </td>
  </tr>
  </tr>
  <tr>
    <td>
      <pre>\|  A  |  B  |  C  | \
\| --- | --- | --- | \
\|  1  |  2  |  3  |</pre>
    </td>
    <td>|  A  |  B  |  C  |<br>
| --- | --- | --- |<br>
|  1  |  2  |  3  |</td>
  </tr>
  <tr>
    <td>
      <h1>Links & Images</h1>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      https://<span>github</span>.com/
    </td>
    <td>
      <a href="https://github.com/">https://github.com/</a>
    </td>
  </tr>
  <tr>
    <td>
      FOO&lt;https://<span>github</span>.com/&gt;BAR
    </td>
    <td>
      FOO<a href="https://github.com/">https://github.com/</a>BAR
    </td>
  </tr>
  <tr>
    <td>
      [Github][github-homepage]
      <br><br>
      [github-homepage]: https://<span>github</span>.com/
    </td>
    <td>
      <a href="https://github.com/">Github</a>
    </td>
  </tr>
  <tr>
    <td>
      [Github](https://<span>github</span>.com/)
    </td>
    <td>
      <a href="https://github.com/">Github</a>
    </td>
  </tr>
  <tr>
    <td>
      [Github](https://<span>github</span>.com/ "Github Homepage")
    </td>
    <td>
      <a href="https://github.com/" title="Github Homepage">Github</a>
    </td>
  </tr>
  <tr>
    <td>
      ![](https://<span>amazon</span>.com/favicon.ico)
    </td>
    <td>
      <img src="https://amazon.com/favicon.ico"></img>
    </td>
  </tr>
  <tr>
    <td>
      !["Amazon Favicon"](https://<span>amazon</span>.com/favicon.ico)
    </td>
    <td>
      <img src="https://amazon.com/favicon.ico" alt="Amazon Favicon"></img>
    </td>
  </tr>
  <tr>
    <td>
      https://&lt;span><span>github</span>&lt;/span>.com/
    </td>
    <td>
      https://<span>github</span>.com/
    </td>
  </tr>
  <tr>
    <td>
      \!\[](https://<span>amazon</span>.com/favicon.ico)
    </td>
    <td>
      ![](https://<span>amazon</span>.com/favicon.ico)
    </td>
  </tr>
  <tr>
    <td><h1>Code Blocks</h1></td>
    <td></td>
  </tr>
  <tr>
    <td>
      <pre>```javascript
// a function that returns 'hello'
function greet() {
    return 'hello';
}
```</pre>
    </td>
    <td>
      <pre lang="javascript"><code>// a function that returns 'hello'
function greet() {
    return 'hello';
}</code></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>```txt
**Look, ma!** It's _Markdown_!
```</pre>
    </td>
    <td>
      <pre><code>**Look, ma!** It's _Markdown_!</code></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>~~~md
```txt
**Look, ma!** It's _Markdown_!
```
~~~</pre>
    </td>
    <td>
      <pre lang="markdown"><code>```txt
**Look!** It's _Markdown_!
```</code></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>```mkdn
~~~txt
**Look, ma!** It's _Markdown_!
~~~
```</pre>
    </td>
    <td>
      <pre lang="markdown"><code>~~~txt
**Look!** It's _Markdown_!
~~~</code></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>    ```mkdn
    ~~~txt
    **Look, ma!** It's _Markdown_!
    ~~~
    ```</pre>
    </td>
    <td>
      <pre lang="markdown"><code>```mkdn
~~~txt
**Look!** It's _Markdown_!
~~~
```</code></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>\``` \
not code \
\```</pre>
    </td>
    <td>
      ```<br>
      not code<br>
      ```<br>
    </td>
  </tr>
  <tr>
    <td><h1>Mixed Lists</h1></td>
    <td></td>
  </tr>
  <tr>
    <td>
      <pre>- a list with a code block
  ```javascript
  // just a comment
  ```
- and a blockquote
  > Here's Johnny!
- and an image
  ![](https://amazon.com/favicon.ico)
- and even a table
  | a   | b   | c   |
  | --- | --- | --- |
  | 1   | 2   | 3   |</pre>
    </td>
    <td>
<ul>
<li>a list with a code block
<div class="highlight highlight-source-js"><pre><span class="pl-c">// just a comment</span></pre></div>
</li>
<li>and a blockquote
<blockquote>
<p>Here's Johnny!</p>
</blockquote>
</li>
<li>and an image
<img src="https://amazon.com/favicon.ico"></img>
</il>
<li>and even a table
<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
<th>c</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
</tbody>
</table>
</li>
</ul>
    </td>
  </tr>
</table>

# See Also

- [Markdown Guide's Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [Github's Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  - [Github's Markdown Cheat Sheet (pdf)](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
  - [www.emoji-cheat-sheet.com](https://www.webfx.com/tools/emoji-cheat-sheet/)
  - [Complete Emoji Preview](https://gist.github.com/rxaviers/7360908)
  - [Emoji JSON API](https://api.github.com/emojis)
- [Adam P's Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
