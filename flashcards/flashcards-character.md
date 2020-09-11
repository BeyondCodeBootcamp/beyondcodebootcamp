# dash

## -

###### bash

```bash
echo -n "Hello"
```

```bash
ls -lahF ./
```

```bash
git commit -m "wip"
```

```bash
curl -fsS https://example.com/
```

# hyphen

## -

###### bash

```bash
sudo apt-get install ...
```

```bash
vps-adduser
```

```bash
ssh-pubkey
```

# dash-dash

## --

```bash
git commit --amend
```

```bash
node --version
```

```bash
go build --help
```

# slash

## /

###### bash,js

"always end your paths in a slash"

```bash
https://example.com/
```

```bash
Demo/
```

# open angle

## &lt;

```bash
git <command> [<args>]
caddy <command> [<args...>]
```

```html
<!DOCTYPE html>
   <html>
       <head>
           <meta>
           <title>
       <body>
           <table>
```

# close angle

## &gt;

```html
        </meta>
        </title>
    </head>
        </table>
    </body>
</html>
```

# dollar sign

## \$

`env PATH="$PATH"`

`echo "$HOME"`

# dot slash

## ./

“there’s always a space before dot slash”

```bash
npm publish ./ --access public
```

```bash
serviceman add ./server.js
```

# open square (bracket)

## [

```js
items[i];
```

```bash
COMMAND [FLAGS] [OPTIONS] [--] [PATHS]
```

# close square (bracket)

## ]

```json
["foo", "bar", "baz"]
```

# escape (backwards slash)

## \\

(points up and left, towards the **escape** key)

```bash
\" \' \\

\n \ \t
```

# hash (comment)

## &#35;

    # TODO write a script

# tilde (\$HOME)

## ~

```bash
ls ~/Downloads/
```

# Root

## /

###### bash

```bash
ls /Volumes
ls /mnt
ls /app
```

# comment

## //

```js
// TODO write some code
```

# open paren

## (

```go
func echo(args ...string) {
    return args
}


echo("Beyond Code", "Bootcamp")
```

# close paren

## )

“you’re missing a close paren”

```js
a && (b || c);

6 * (8 - 1);
```

# open curly (brace)

## {

“mustache”, “handlebars”

```go
{{ .name }}
```

```rust
{
    let mut greeting = "Hello, World!"
}
```

# pipe

## |

```bash
ls | xargs echo


echo "$HOME" | grep 'Users'
```

# close curly (brace)

## }

```json
{ "name": "bob", "age": "20" }
```

```js
if (error) {
    return error;
}
```

# to file

## &gt;

```bash
cat - > 2020-Jun.txt

curl https://example.com/ > example.html
```

# from file

## &lt;

```bash
psql < init.sql
```

# mod

## %

```go
remainder := 56 % 10

0 == i % 100
```

# hashbang

## #!

```bash
#!/bin/bash
```

```bash
#!/usr/bin/env node
```

# end (with)

## \$

###### regex

vim: “go to the end of the line”

```regexp
$
```

# begin (with)

## ^

vim: “go to the beginning of the line”

“find lines that begin with a comment”

```regexp
/^#.*/gm
```

# zero or more

## \*

```regexp
/air.*plane/
```

# glob (file expansion)

## \*

```bash
prettier --write '*/**.{md,js,json,css,html}'
```

```bash
git add '*.{md,js}'
```

# block comment

## /\* \*/

```javascript
/*
    TODO: Write program
        - should take an argument
        - and print to the screen

 */
```
