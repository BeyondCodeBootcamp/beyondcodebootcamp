# Beyond Code Flashcards

Flashcards for learning things about the keyboard that, as a programmer, you need to know. :-D

<https://beyondcodebootcamp.github.io/flashcards/>

## Build the flashcards

If you have `comrak` and `node` installed, you can build the flashcards yourself.

```bash
comrak flashcards-character.md > flashcards-character.html
prettier --write flashcards-character.html
node parse-cards.js flashcards.tpl.html flashcards-character.html > flashcards.html
```

## Install node.js & Comrak

Read the output. You may need to update your `PATH`.

### Mac & Linux (Microsoft Linux too)

```bash
curl -fsS https://webinstall.dev/node | bash
```

```bash
curl -fsS https://webinstall.dev/comrak | bash
```

```bash
npm install -g prettier
```

### Windows (NOT Microsoft Linux)

```bash
curl.exe -fsSA 'MS' https://webinstall.dev/node | bash
```

```bash
curl.exe -fsSA 'MS' https://webinstall.dev/comrak | bash
```

```bash
npm install -g prettier
```
