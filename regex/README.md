# Why RegExp?

Find and Replace, or Re-Format

- vim: Find and replace in code
- rg (grep): Find across directories
- js: fix malformed data
- html: scrape websites

# What is RegExp

## Literal Characters

| RegExp                  | PCRE | Meaning                        |
| ----------------------- | ---- | ------------------------------ |
| `/Needle/`              |      | Search for `Needle`            |
| `/Needle/i`             |      | I-Case Search for `needle`     |
| `/Needle/ig`            |      | "Global" search for `needle`   |
| `/Needle/igm`           |      | Multi-line search for `needle` |
| a-z<br>A-Z<br>0-9<br>\_ |      | Literal Characters             |
| `\`                     |      | Escape (reverse the meaning)   |

Object/String form: `new RegExp("Needle", "ig")` will need double `\\`.

## Capture Groups

| RegExp          | PCRE            | Meaning       |
| --------------- | --------------- | ------------- |
| `(...)`         | `\(...\)`       | Capture Group |
| `\|`            | `\\\|`          | OR            |
| `$1`, `$2`, ... | `\1`, `\2`, ... | Apply Group   |

## Quantity

| RegExp  | PCRE     | Meaning                 |
| ------- | -------- | ----------------------- |
| `?`     | `\?`     | 0 or 1                  |
| `*`     |          | 0+                      |
| `+`     | `\+`     | 1+                      |
| `{n,m}` | `\{n,m\} | ex: `{2,4}`from`n`to`m` |

## Ranges

| RegExp   | PCRE | Meaning                     |
| -------- | ---- | --------------------------- |
| `.`      |      | Any                         |
| `[abc]`  |      | Any of `a`, `b`, or `c`     |
| `[^abc]` |      | Any except `a`, `b`, or `c` |
| `\w`     |      | alias for `[a-zA-Z0-9\_]`   |
| `\W`     |      | alias for `[^a-zA-Z0-9\_]`  |
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

### JS-compatible

- [`rg`](https://webinstall.dev/rg)

### Perl-compatible

- `vim`
- `grep`
