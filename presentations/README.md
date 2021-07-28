# Moved

See [github.com/BeyondCodeBootcamp/presos](https://github.com/BeyondCodeBootcamp/presos)

## These slides are built with [_Markdown Slides_][mds]

[mds]: https://github.com/dadoomer/markdown-slides

You'll need:

- python 3.9.1
- mdslides
- a single markdown file

### How to Install Pyenv + Python

See https://webinstall.dev/pyenv

#### Install pyenv

```bash
curl -sS https://webinstall.dev/pyenv | bash
```

If you see `WARNING: Can not proceed... remove '~/.pyenv' first`, then you already have `pyenv` installed. No worries. Carry on.

#### Install the latest python 3

Check the latest version:

```bash
pyenv install --list | grep -v -- - | tail -n 1
```

You can install that or, if you want to have the exact setup as I have, use 3.9.1:

```bash
pyenv install -v 3.9.1
```

Then set that to the current version for your user:

```bash
pyenv global 3.9.1
python --version
```

#### Install Markdown Slides with pip

```bash
python -m pip install git+https://gitlab.com/da_doomer/markdown-slides.git
```

### Create Slides

See [presentation.md](https://github.com/dadoomer/markdown-slides/blob/master/example/presentation.md) and the [reveal.js cheat sheet](https://revealjs.com/markdown/).

Slides look like this:

````md
[comment]: # (THEME = white)
[comment]: # (CODE_THEME = zenburn)
[comment]: # (controls: false)
[comment]: # (keyboard: true)
[comment]: # (markdown: { smartypants: true })
[comment]: # (hash: false)
[comment]: # (respondToHashChanges: false)

# Great Title

A great slide

[comment]: # (!!!)

# A Second Slide

Another great slide

[comment]: # (!!! data-auto-animate)

# An Animated Slide

A really WOW slide

[comment]: # (!!! data-auto-animate data-background-color="aquamarine")

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
```
<!-- .element: data-id="code" -->

[comment]: # (!!! data-auto-animate)

```js [5]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
c(5);
```
<!-- .element: data-id="code" -->

[comment]: # (!!! data-auto-animate)
````

Note:
- The `[comment]: # (!!!)` bits signify the END of a slide and contain metadata pertaining to the slide above them.
- DO NOT use `prettier` on the slides (it will ruin the comments)
   ```bash
   echo '**/*.md' >> .prettierignore
   ```

It's basically reveal.js, but with the nasty html taken out of your way.

- Slide Themes: https://revealjs.com/themes/ (ex: white)
- Code Themes: https://highlightjs.org/ (ex: zenburn)
- Slide Configuration: https://revealjs.com/config/

## Render Slides

1. Navigate to the directory for your presentation:
   ```bash
   mkdir ./my-presentation
   pushd ./my-presentation
   ```
2. Render the slides

- as html
  ```bash
  mdslides ./slides.md
  ```
- or as a pdf
  ```bash
  mdslides --pdf ./slides.md
  ```
- include additional assets as needed
  ```bash
  mdslides --include ./img --include ./js ./slides.md
  ```

3. The website directory will be the markdown file
   ```bash
   open ./slides/index.html
   ```
