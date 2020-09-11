#!/bin/bash

comrak flashcards-character.md > flashcards-character.html
prettier --write flashcards-character.html
node parse-cards.js flashcards.tpl.html flashcards-character.html > flashcards.html
