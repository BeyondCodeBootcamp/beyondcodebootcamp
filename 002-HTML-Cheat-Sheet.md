# Exemplary HTML Cheat Sheet (for Articles)

The markdown-compatible parts of HTML, in table form - with examples! :smiley:

<!-- Best test of skill: [Beyond Code Markdown Challenge](https://gist.github.com/coolaj86/689e2cd8d5ad51f7196b8f23c116f8b1) -->
<!-- Best interactive tutorial: [commonmark.org/help/tutorial](https://commonmark.org/help/tutorial/) -->

- Best at-a-glance reference: [w3schools HTML Reference](https://www.w3schools.com/Tags/ref_byfunc.asp)
- Best technical reference: [MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- Best browser support matrix: [Can I Use](https://caniuse.com/)
- GitHub HTML Support Test: [GitHub HTML Whitelist](https://gist.github.com/coolaj86/89821fe046623d5503ce5c4133e70506)

## Table of Contents

| [Headings](#headings) | `<a id="heading"><h3>Heading</h3></a>` | <h3>Heading</h3> |
| --------------------- | ----------- | --------- |
| [Inline Formatting](#inline-formatting) | text node<br>\<span class="example">span\</span><br><strong>\<strong>strong\</strong></strong><br><em>\<em>em\</em></em><br><del>\<del>del\</del></del><br>\<sup>sup\</sup><br>\<sub>sub\</sub><br><code>\<code>code\</code></code><br><kbd>\<kbd>kbd\</kbd></kbd> |  text node<br>span (queriable text)<br>**strong**<br>*em*<br>~del~<br><sup>sup</sup><br><sub>sub</sub><br>`code`<br><kbd>kbd</kbd> |
| [Emoji & Escape Codes](#emojis--escape-codes) | \&lt;<br>\&amp;<br>\&nbsp;<br>\&#x1F44D; | \<<br>&<br>` ` (non-breaking space)<br>:+1: |
| [Block Formatting](#block-formatting) | `<div class="example">a box area</div>`<br>`<blockquote>a famous quote</blockquote>` | a box area<br><blockquote>a famous quote</blockquote> |
| [Lists](#lists) | <pre>\<ul><br>    \<li>item one\</li><br>    \<li>item two\</li><br>\</ul></pre> | <ul><li>item one</li><li>item two</li><ul> |
| [Details](#lists) | <pre>\<details><br>    \<summary>How to ride a walk\</summary><br>    put one foot in front of the other<br>and soon you'll be walking out the door<br>\</details></pre> | <details><br>    <summary>How to ride a walk</summary><br>    put one foot in front of the other<br>and soon you'll be walking out the door<br></details> |
| [Tables](#tables) | <pre>\<table><br>\<thead><br>&nbsp;&nbsp;\<tr><br>&nbsp;&nbsp;&nbsp;&nbsp;\<th>Abc\</th><br>&nbsp;&nbsp;&nbsp;&nbsp;\<th>Def\</th><br>&nbsp;&nbsp;&nbsp;&nbsp;\<th>Ghi\</th><br>&nbsp;&nbsp;\</tr><br>\</thead><br>\<tbody><br>&nbsp;&nbsp;\<tr><br>&nbsp;&nbsp;&nbsp;&nbsp;\<td>123\</td><br>&nbsp;&nbsp;&nbsp;&nbsp;\<td>456\</td><br>&nbsp;&nbsp;&nbsp;&nbsp;\<td>789\</td><br>&nbsp;&nbsp;\</tr><br>\</tbody><br>\</table></pre> | <table><thead><tr><th>Abc</th><th>Def</th><th>Ghi</th></tr></thead><tbody><tr><td>123</td><td>456</td><td>789</td></tr></tbody></table> |
| [Links](#links--images) | <pre>\<a href="https://beyondcodebootcamp.com"<br>    >beyondcodebootcamp.com\</a></pre> | [beyondcodebootcamp.com](https://beyondcodebootcamp.com) |
| [Images](#links--images) | <pre>\<picture><br>  \<img src="https://amazon.com/favicon.ico"<br>       alt="Amazon's logo" /><br>\<picture></pre> | ![](https://amazon.com/favicon.ico) |
| [Inline Code](#inline-code) | <pre>\<code>\&lt;strong>bold\&lt;/strong>\</code></pre> | <code>\<strong>bold\</strong></code> |
| [Code Blocks](#code-blocks) | <pre>\<pre>\<code>\&lt;strong><br>  bold<br>\&lt;/strong>\</code>\</pre></pre> | <pre>\<strong><br>  bold<br>\</strong></pre> |
| [Nesting](#nest-all-the-things) | A note on nesting | - |
| Horizontal Rule | `<hr>` | <hr> |

_Note: That table ^^ is written in Markdown, but contains a lot of escapes and HTML._

## Things you DON'T get in Markdown

<ul>
  <li>
<details>
  <summary>&lt;details> & &lt;summary></summary>
  Nice little foldout, eh? Although it's supported in most of the CommonMark&trade; Markdown parsers, you can't use the Markdown syntax for these on Github.
</details>
  </li>
  <li><kbd>Enter</kbd> &lt;kbd> often has a nice default style, but is HTML-only</li>
  <li>&lt;sup><sup>sup</sup> & &lt;sub><sub>sub</sub>, which is a pity because they're sometimes useful
  <li>&lt;div>, &lt;span>, and therefore `class="xxxx"` - no custom query selectors in Markdown</li>
  <li>... and that's about it - at least of the things you'd want for a blog</li>
</ul>

## Basic Document HTML by Example

<!-- Headings -->

<table>
  <thead>
    <th><h1>Headings</h1></th>
    <th></th>
  </thead>
  <tr>
    <td>
      <pre>&lt;a id="heading-1" href="#heading-1"><br>&nbsp;&nbsp;&lt;h1>Heading 1&lt;/h1><br>&lt;/a></pre>
    </td>
    <td>
      <h1>Heading 1</h1>
    </td>
  </tr>
  <tr>
    <td>
      <div class="highlight highlight-source-js">
      <pre>&lt;a id="heading-2" href="#heading-2"><br>&nbsp;&nbsp;&lt;h2>Heading 2&lt;/h2><br>&lt;/a></pre>
      </div>
    </td>
    <td>
      <h2>Heading 2</h2>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a id="heading-3" href="#heading-3"><br>&nbsp;&nbsp;&lt;h3>Heading 3&lt;/h3><br>&lt;/a></pre>
    </td>
    <td>
      <h3>Heading 3</h3>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a id="heading-4" href="#heading-4"><br>&nbsp;&nbsp;&lt;h4>Heading 4&lt;/h4><br>&lt;/a></pre>
    </td>
    <td>
      <h4>Heading 4</h4>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a id="heading-5" href="#heading-5"><br>&nbsp;&nbsp;&lt;h5>Heading 5&lt;/h5><br>&lt;/a></pre>
    </td>
    <td>
      <h5>Heading 5</h5>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a id="heading-6" href="#heading-6"><br>&nbsp;&nbsp;&lt;h6>Heading 6&lt;/h6><br>&lt;/a></pre>
    </td>
    <td>
      <h6>Heading 6</h6>
    </td>
  </tr>
</table>

<!-- Emojis -->

<table>
  <thead>
    <th><h1>Emojis & Escape Codes</h1></th>
    <th>
      (Be sure to include <code>&lt;meta charset="UTF-8" /></code> in your HTML <code>&lt;head></code>)
    </th>
  </thead>
  <tr>
    <td>
      <pre>&amp;#x1f44d; &amp;#x1f389; &amp;#x1f525;</pre>
    </td>
    <td>
      &#x1f44d; &#x1f389; &#x1f525;
    </td>
  </tr>
  <tr>
    <td>
      <pre>&amp;copy; 42&amp;deg; &amp;trade;</pre>
    </td>
    <td>
      &copy; 42&deg; &trade;
    </td>
  </tr>
  <tr>
    <td>
      <pre>&amp;amp; &amp;lt; &amp;gt;</pre>
    </td>
    <td>
      &amp; &lt; &gt;
    </td>
  </tr>
  <tr>
    <td>
      <pre>"&amp;nbsp;"<br>white&nbsp;&nbsp;&nbsp;&nbsp;space<br>white&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;space</pre>
    </td>
    <td>
      "&nbsp;"<br>white    space<br>white&nbsp;&nbsp;&nbsp;&nbsp;space
    </td>
  </tr>
  <tr>
    <td>
      All HTML Named Codes
      <br>&amp; Popular Emojis
    </td>
    <td>
      <ul>
        <li><a href="https://www.w3schools.com/charsets/ref_emoji.asp">w3schools.com/charsets/ref_emoji.asp</a></li>
        <li><a href="http://www.escapecodes.info">escapecodes.info</a></li>
        <li><a href="https://www.rapidtables.com/web/html/html-codes.html">rapidtables.com/web/html/html-codes.html</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      Use JavaScript to Discover an Emoji's HTML Code:
    </td>
    <td>
      <pre>"&amp;#x" + "&#x1f4be;".charCodeAt(0).toString(16) + ";"</pre>
    </td>
  </tr>
</table>

<!-- Inline Formatting -->

<table>
  <thead>
    <th><h1>Inline Formatting</h1></th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <pre>text node
&amp;lt;span class="example">
&amp;lt;strong>
&amp;lt;em>
&amp;lt;del>
&amp;lt;sup>
&amp;lt;sub>
&amp;lt;code>
&amp;lt;kbd></pre>
      <br>
      non-queriable text
      <br>
      &lt;span class="example">queriable text&lt;/span>
      <br>
      &lt;strong>bold&lt;/strong>
      <br>
      em&lt;strong>bold&lt;/strong>en
      <br>
      <br>
      &lt;em>italic&lt;/em>
      <br>
      i&lt;em>tal&lt;/em>ic
      <br>
      word&lt;sup>superscript&lt;/sup>
      <br>
      word&lt;sub>subscript&lt;/sub>
      <br>
      <br>
      &lt;strong>&lt;em>both&lt;/em>&lt;/strong>
      <br>
      <br>
      &lt;del>strikethrough&lt;/del>
      <br>
      str&lt;del>ike&lt;/del>through
      <br>
      <br>
      &lt;code>inline code&lt;/code>
      <br>
      in&lt;code>li&lt;/code>ne
      <br>
      <br>
      &lt;strong>&lt;em>&lt;del>&lt;code
      <br>&nbsp;&nbsp;&nbsp;&nbsp;>all of the above&lt;/
      <br>code>&lt;del>&lt;/em>&lt;/strong>
      <br>
      <br>
      &lt;kbd>Cmd ⌘&lt;/kbd>
    </td>
    <td>
      <pre>text node
&lt;span class="example">
<strong>&lt;strong></strong>
<em>&lt;em></em>
<del>&lt;del></del>
<sup>&lt;sup></sup>
<sub>&lt;sub></sub>
<code>&lt;code></code>
<kbd>&lt;kbd></kbd></pre>
      <br>
      non-queriably text
      <br>
      <span>queriable text</span>
      <br>
      <strong>bold</strong>
      <br>
      em<strong>bold</strong>en
      <br>
      <br>
      <em>italic</em>
      <br>
      i<em>tal</em>ic
      <br>
      word<sup>superscript</sup>
      <br>
      word<sub>subscript</sub>
      <br>
      <br>
      <strong><em>both</em></strong>
      <br>
      <br>
      <del>strikethrough</del>
      <br>
      str<del>ike</del>through
      <br>
      <br>
      <code>inline code</code>
      <br>
      in<code>li</code>ne
      <br>
      <br>
      <strong><em><del><code>all of the above</code><del></em></strong>
      <br><br><br>
      <br>
      <kbd>Cmd ⌘</kbd>
    </td>
  </tr>
</table>

<!-- Block Formatting -->

<table>
  <thead>
    <th>
      <h1>Block Formatting</h1>
    </th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <pre>&amp;lt;div class="example"> <br>
&amp;lt;p>
&amp;lt;blockquote>
&amp;lt;pre>
&amp;lt;br></pre>
    </td>
    <td>
      <pre>&lt;div class="example">
&lt;p>
&lt;blockquote>
&lt;pre>
&lt;br></pre>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;div class="
  example
  foo
  bar
">A queriable box area.&lt;/div></pre>
    </td>
    <td>
      <p>A queriable box area.</p>
    </td>
  </tr>
  <tr>
    <td>
      &lt;p>A paragraph of text.&lt;/p>
      <br><br>
      &lt;p>A second paragraph,<br>with multiple<br>lines.&lt;/p>
    <td>
      <p>A paragraph of text.</p>
      <p>A second paragraph, with multiple lines.</p>
      <br>
      <br>
    </td>
  </tr>
  <tr>
    <td>
      A third paragraph, &lt;br><br>
      with line &lt;br><br>
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
      &lt;blockquote>
      A blockquote
      <br>
      with attribution - Anonymous
      &lt;/blockquote>
    </td>
    <td>
      <blockquote>A blockquote with attribution - Anonymous</blockquote>
    </td>
  </tr>
  <tr>
    <td>
      > A blockquote &lt;br>
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
      &lt;blockquote>a quote
      <br>
      &lt;blockquote>within a quote
      &lt;/blockquote>
      &lt;/blockquote>
    </td>
    <td>
      <blockquote>a quote
        <blockquote>within a quote</blockquote></blockquote>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;pre>A &amp;lt;pre>
perfectly    preserves
&nbsp;&nbsp;all        whitespace
(usually)&lt;/pre></pre>
    </td>
    <td>
      <pre>A &lt;pre>
perfectly    preserves
&nbsp;&nbsp;all        whitespace
(usually)</pre>
    </td>
  </tr>
</table>

<!-- Lists -->

<table>
  <thead>
    <th>
      <h1>Lists</h1>
    </th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <pre>&lt;ul>
    &lt;li>a bulleted (unordered) list&lt;/li>
    &lt;li>with multiple items
      &lt;ul>
        &lt;li>at multiple nested levels
          &lt;ul>
            &lt;li>weeee!&lt;/li>
          &lt;/ul>
        &lt;/li>
      &lt;/ul>
    &lt;/li>
&lt;/ul></pre>
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
      <pre>&lt;ol>
  &lt;li>a numbered (ordered) list&lt;/li>
  &lt;li>
    with multiple items
    &lt;ul>
      &lt;li>
        including unordered items
        &lt;ul>
          &lt;li>and nested items&lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul>
  &lt;/li>
&lt;/ol></pre>
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
      <pre>&lt;ol>
  &lt;li>a numbered (ordered) list&lt;/li>
  &lt;li>with multiple items
    &lt;ol>
      &lt;li>with deeply,
        &lt;ol>
          &lt;li>deeply, nested numbering&lt;/li>
        &lt;/ol>
      &lt;/li>
    &lt;/ol>
  &lt;/li>
&lt;/ol></pre>
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
    </td>
  </tr>
</table>

<!-- Tables -->

<table>
  <thead>
    <th>
      <h1>Tables</h1>
    </th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <pre>&lt;table>
  &lt;thead>
    &lt;tr>
      &lt;th align="left">Left&lt;/th>
      &lt;th align="center">Center&lt;/th>
      &lt;th align="right">Right&lt;/th>
      &lt;th>Default&lt;/th>
    &lt;/tr>
  &lt;/thead>
  &lt;tbody>
    &lt;tr>
      &lt;td align="left">Left ...&lt;/td>
      &lt;td align="center">... Center ...&lt;/td>
      &lt;td align="right">... Right&lt;/td>
      &lt;td>Default&lt;/td>
    &lt;/tr>
    &lt;tr>
      &lt;td align="left">1&lt;/td>
      &lt;td align="center">2&lt;/td>
      &lt;td align="right">3&lt;/td>
      &lt;td>4&lt;/td>
    &lt;/tr>
    &lt;tr>
      &lt;td align="left">-&lt;/td>
      &lt;td align="center">-&lt;/td>
      &lt;td align="right">-&lt;/td>
      &lt;td>Multi-&lt;br />line&lt;/td>
    &lt;/tr>
  &lt;/tbody>
&lt;/table></pre>
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
            <td align="left">Left ...</td>
            <td align="center">... Center ...</td>
            <td align="right">... Right</td>
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
            <td>Multi-<br />line</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</table>

<!-- Links & Images -->

<table>
  <thead>
    <th>
      <h1>Links & Images</h1>
    </th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <pre>&lt;a href="https://github.com"
    target="_blank"
    >https:<span>//</span>github.com&lt;/a></pre>
    </td>
    <td>
      <a href="https://github.com"
         target="_blank"
         >https://github.com</a>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="/README.md"
    >README.md&lt;/a></pre>
    </td>
    <td>
      <a href="/README.md"
         >README.md</a>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="mailto:john.doe@example.com"
    >john.doe@example.com&lt;/a></pre>
    </td>
    <td>
      <a href="mailto:john.doe@example.com"
         >john.doe@example.com</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Note</strong>
    </td>
    <td>
      For security reasons these special links <strong>won't work</strong> directly on Github.
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="tel:+18008675309"
    >1 (800) 867-5309&lt;/a></pre>
    </td>
    <td>
      <a href="tel:+18008675309"
         >1 (800) 867-5309</a>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="javascript:window.alert('Hello!')"
    >Click me!&lt;/a></pre>
    </td>
    <td>
      <a href="javascript:window.alert('Hello!')"
         >Click me!</a>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="spotify:search:Taylor+Swift"
    >Taylor Swift on Spotify&lt;/a></pre>
    </td>
    <td>
      <a href="spotify:search:Taylor+Swift"
         >Taylor Swift on Spotify</a>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;picture>
  &lt;img src="https://amazon.com/favicon.ico"
     alt="Amazon's logo"
     width="48px" />
&lt;/picture></pre>
    </td>
    <td>
      <picture>
        <img src="https://amazon.com/favicon.ico" alt="Amazon's logo" width="48px" />
      </picture>
    </td>
  </tr>
  <tr>
    <td>
      <pre>&lt;a href="https://amazon.com"
   target="_blank"
   >&lt;picture>
     &lt;img src="https://amazon.com/favicon.ico"
          alt="Amazon's logo"
          width="48px" />
  &lt;/picture></pre>
    </td>
    <td>
      <a href="https://amazon.com"
         target="_blank"
         ><picture>
           <img src="https://amazon.com/favicon.ico" alt="Amazon's logo" width="48px" />
        </picture></a>
    </td>
  </tr>
</table>

For custom URL schemes see <https://en.wikipedia.org/wiki/List_of_URI_schemes>.


<!-- Nesting -->

<table>
  <thead>
    <th>
      <h1>Nest All The Things!</h1>
    </th>
    <th>
    </th>
  </thead>
  <tr>
    <td>
      <ul>
        <li>✅ Almost any inline element can nest in any other element</li>
        <li><pre>&lt;strong>&lt;em>Great Words!&lt;/em>&lt;/strong></pre></li>
      </ul>
    </td>
    <td>
      <ul>
        <li>❌ All tags must open and close in order</li>
        <li><pre>&lt;strong>&lt;em>Great Words!&lt;/strong><strong>&lt;/em></strong></pre></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>✅ Almost any block element can nest in another block element</li>
        <li><pre>&lt;div>&lt;pre>Great boxes!&lt;/pre>&lt;/div></pre></li>
      </ul>
    </td>
    <td>
      <ul>
        <li>❌ You <em>cannot</em> nest block elements in inline elements</li>
        <li><pre>&lt;span><strong>&lt;div></strong>Great boxes!&lt;/div>&lt;/span></pre></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>❌
          <blockquote>
            The <em>code</em> is more what you'd call 'guidelines' than actual rules.
          </blockquote>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>✅
          <blockquote>
            Welcome aboard <del>the Black Pearl</del> HTML.
          </blockquote>
        </li>
      </ul>
    </td>
  </tr>
</table>

## See Also

- https://bootswatch.com/materia/
- http://www.simplehtmlguide.com/cheatsheet.php
- https://websitesetup.org/html5-cheat-sheet/
- https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/html5.html
- https://devchat.tv/js-jabber/jsj-478-browser-standards-rampage-can-we-have-nice-things/ (some good history of HTML in there)
- https://en.wikipedia.org/wiki/List_of_URI_schemes
