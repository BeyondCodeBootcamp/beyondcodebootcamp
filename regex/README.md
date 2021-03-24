# Why RegExp?

Find and Replace, or Re-Format

- cli: Search documentation
- vim: Find and replace in code
- rg (grep): Search through code, across directories
- js: fix malformed data (ex: Phone numbers)
- html: scrape websites

# Cautions

> Regex is like salt: A little goes a long way, and a lot will put a bad taste in your mouth.

Regex is very terse - it's easy to write, but nearly impossible to read.

If you ever start using nested capture groups, or look-behinds, you may have gone down a dark path.
You may need to stop.

Better to be adequate than to be a master.

# What is RegExp

Regular Expressions is basically a mini programming language unto itself, used for finding and replacing text.

- Literals
- Groups
- Quantities
- Ranges

## Literal Characters

| RegExp                  | PCRE | Meaning                        |
| ----------------------- | ---- | ------------------------------ |
| `/Needle/`              |      | Search for `Needle`            |
| `/Needle/i`             |      | I-Case Search for `needle`     |
| `/Needle/ig`            |      | "Global" search for `needle`   |
| `/Needle/igm`           |      | Multi-line search for `needle` |
| `a-z`<br>`A-Z`<br>`0-9`<br>`_` |   | Literal Characters         |
| `\`                     |      | Escape (reverse the meaning)   |

Object/String form: `new RegExp("Needle", "ig")` will need double `\\`.

## Capture Groups

| RegExp          | PCRE                 | Meaning       |
| --------------- | -------------------- | ------------- |
| `(...)`         | `\(...\)`            | Capture Group |
| `\|`            | <code>\\&vert;</code> | OR            |
| `$1`, `$2`, ... | `\1`, `\2`, ...      | Apply Group   |

## Quantity

| RegExp  | PCRE      | Meaning                 |
| ------- | --------- | ----------------------- |
| `?`     | `\?`      | 0 or 1                  |
| `*`     |           | 0+                      |
| `+`     | `\+`      | 1+                      |
| `{n}`   | `\{n\}`   | ex: `{3}` exactly 3     |
| `{n,m}` | `\{n,m\}` | ex: `{2,4}`from`n`to`m` |

## Ranges

| RegExp   | PCRE | Meaning                     |
| -------- | ---- | --------------------------- |
| `.`      |      | Any                         |
| `[abc]`  |      | Any of `a`, `b`, or `c`     |
| `[^abc]` |      | Any except `a`, `b`, or `c` |
| `\w`     |      | alias for `[a-zA-Z0-9_]`    |
| `\W`     |      | alias for `[^a-zA-Z0-9_]`   |
| `\d`     |      | alias for `[0-9]`           |
| `\D`     |      | alias for `[^0-9]`          |
| `\s`     |      | alias for `[ \t\r\n]`       |
| `\S`     |      | alias for `[^ \t\r\n]`      |

## Position

| RegExp | PCRE       | Meaning                      |
| ------ | ---------- | ---------------------------- |
| `\b`   | `\<`, `\>` | Word Boundary (including \_) |
| `^`    |            | Start                        |
| `$`    |            | End                          |

# Examples

## Format a Phone Number

```txt
+1 (801) 555-1234
801-555-1234
18015551234
801.555.1234
801 555 1234
```

```js
// replace all non-digit characters
var phone = "801.555.1234".replace(/\D/g, '');

// capture
var m = phone.match(/(1?)(\d{3})(\d{3})(\d{4})/)

console.log("+1 (" + m[2] + ") " + m[3] + "-" + m[4]);
```

## Match a website, or subdomain

```txt
// ZoOm.com                // match
// zoom.com.evilhacker.com // no match
// evilzoom.com            // no match
// www.zoom.com            // match
```

```js
var goodsite = "ZoOm.com";
goodsite.match(/(^|.*\.)zoom\.com$/i)
```

## Parse a version number

Parse valid semver (doesn't reject invalid semver)

```txt
"v3.0.0-rc.1+abcdef"
```

```js
"v3.0.0-rc.1+abcdef".match(/v?(\d+)\.(\d+)\.(\d+)(-([^+]*))?(\+(.*))/)
```

# JS vs PCRE

## JS-compatible

- [`rg`](https://webinstall.dev/rg)

## Perl-compatible

- `vim`
- `grep`

