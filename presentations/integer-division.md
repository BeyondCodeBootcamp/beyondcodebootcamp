[comment]: # (THEME = black)
[comment]: # (CODE_THEME = zenburn)
[comment]: # (controls: false)
[comment]: # (keyboard: true)
[comment]: # (markdown: { smartypants: true })
[comment]: # (hash: false)
[comment]: # (respondToHashChanges: false)

## Whole Numbers<br>in Programming

Integer Division

Mod(ulus) & Remainders

[comment]: # (!!!)

Arithmetic Refresher:
- Integers & Floats
- Float Division

[comment]: # (!!!)

# Integers

An **INTEGER** is a whole, countable number.

```js
1, 2, 3...
```

(i.e. you can count these on your fingers)

[comment]: # (!!!)

# Integers

Integers give _exact_ values.

```js
1 + 2
= 3
```

[comment]: # (!!! data-auto-animate)

# Integers

Integers give _exact_ values.

```js
1 + 2
= 3
```

(assuming you don't overflow...)

[comment]: # (!!! data-auto-animate)

# Floats

A **FLOAT** is a high-ish precision decimal number.

```js
1.0, 1.1, 1.01, 1.11, ... ??
```

[comment]: # (!!!)

# Floats

And is usually a "good enough" approximation.

```js
2 / 3
= 0.6666666666666666
```

[comment]: # (!!! data-auto-animate)

# Floats

And is usually a "good enough" approximation.

```js
2 / 3
= 0.6666666666666666
```

(not a perfect fraction, but it'll do in a pinch)

[comment]: # (!!! data-auto-animate)

# Floats

And is usually a "good enough" approximation.

```js
2 / 3
= 0.6666666666666666
```

(not a perfect fraction, but it'll do in a pinch)

```js
0.1 + 0.2
> 0.30000000000000004
```

(but sometimes fail really, really spectacularly)

[comment]: # (!!! data-auto-animate)


# Integer vs Float

```js
1 + 2
> 3
```

The differences _are_ important.

```js
0.1 + 0.2
> 0.30000000000000004
```

[comment]: # (!!!)

# Float Division

This is obvious

```js
10.0 / 2.0
```
<!-- .element: data-id="code-1" -->

[comment]: # (!!! data-auto-animate)

# Float Division

This is obvious

```js
10.0 / 2.0
```
<!-- .element: data-id="code-1" -->

```js
= 5.0
```


[comment]: # (!!! data-auto-animate)

# Float Division

This is obvious

```js
10.0 / 2.0
```
<!-- .element: data-id="code-1" -->

```js
= 5.0
```

As is this

```js
5.0 / 2.0
```
<!-- .element: data-id="code-2" -->

[comment]: # (!!! data-auto-animate)

# Float Division

This is obvious

```js
10.0 / 2.0
```
<!-- .element: data-id="code-1" -->

```js
= 5.0
```

As is this

```js
5.0 / 2.0
```
<!-- .element: data-id="code-2" -->

```js
= 2.5
```

[comment]: # (!!! data-auto-animate)

# Integer Division

And this is obvious

```js
10 / 2
```
<!-- .element: data-id="code-3" -->

[comment]: # (!!! data-auto-animate)

# Integer Division

And this is obvious

```js
10 / 2
```
<!-- .element: data-id="code-3" -->

```js
= 5
```

[comment]: # (!!! data-auto-animate)

# Integer Division

And this is obvious

```js
10 / 2
```
<!-- .element: data-id="code-3" -->

```js
= 5
```

But maybe not this

```js
5 / 2
```
<!-- .element: data-id="code-4" -->

[comment]: # (!!! data-auto-animate)

# Integer Division

And this is obvious

```js
10 / 2
```
<!-- .element: data-id="code-3" -->

```js
= 5
```

But maybe not this

```js
5 / 2
```
<!-- .element: data-id="code-4" -->

```js
= 2
```

[comment]: # (!!! data-auto-animate)

# Language Differences

Go has Integer Division

```go
n := 11 / 2
```

JavaScript does not...

```js
let n = Math.floor(11 / 2)
```

[comment]: # (!!!)


# Why?

[comment]: # (!!!)

# Time

> It's 28 minutes until lunch is over.
>
> How many SOA episodes can I watch?

```js
28 / 10
= 2
```

[comment]: # (!!!)

# Money

> I've got 51 bucks in my bank account.
>
> How many 2 dollar bills can I get?

```js
51 / 2
= 25
```

[comment]: # (!!!)

# & Teams

> There are 13 players.
>
> How many 4-man teams can we form?

```js
13 / 4
= 3
```

[comment]: # (!!!)

# Modulus<br>(a.k.a. Mod)

```js
%
```

# & Remainders

[comment]: # (!!!)


# Mod (%)

`%` is the inverse of `/`

```js
10 % 2
```

[comment]: # (!!! data-auto-animate)

# Mod (%)

`%` is the inverse of `/`

```js
10 % 2
```

```js
= 0
```

[comment]: # (!!! data-auto-animate)

# Mod (%)

`%` is the inverse of `/`

```js
10 % 2
```

```js
= 0
```

it gives you the leftovers

```js
5 % 2
```

[comment]: # (!!! data-auto-animate)

# Mod (%)

`%` is the inverse of `/`

```js
10 % 2
```

```js
= 0
```

it gives you the leftovers

```js
5 % 2
```

```js
= 1
```

[comment]: # (!!! data-auto-animate)

# Mod (%)

`%` is the inverse of `/`

```js
10 % 2
```

```js
= 0
```

it gives you the leftovers

```js
5 % 2
```

```js
= 1
```

(floats need not apply)

[comment]: # (!!! data-auto-animate)


# Why?

[comment]: # (!!!)

# Time

> 525,600 minutes.
>
> How do you measure the life of a man?

```js
525_600 / 60
= 8760
```

```js
525_600 % 60
= 0
```

[comment]: # (!!!)

# Money

> I put 5 dollars into a vending machine.
>
> What's my change for a 3.50 Snickers?

```js
1_50 / 1_00 // dollars
= 1
```

```js
1_50 % 1_00
= 50
```

```js
50 / 25 // quarters
= 2
```

[comment]: # (!!!)

# and... Cryptography

```js
101 % 13
```

(Prime Number Voodoo)

[comment]: # (!!! data-auto-animate)

# and... Cryptography

```js
101 % 13
```

(Prime Number Voodoo)

```js
dank_big_number % Math.pow(2, 1_279) - 1
```

[comment]: # (!!! data-auto-animate)

# and... Cryptography

```js
101 % 13
```

(Prime Number Voodoo)

```js
dank_big_number % Math.pow(2, 1_279) - 1
```

(the distance between large primes is astronomical)

[comment]: # (!!! data-auto-animate)

# Durations

```js
382_106 / 3600 // Hours
= 106
```

```js
382_106 % 3600 // Leftover Seconds
= 506
```

```js
506 / 60 // Minutes
= 8
```

```js
506 % 60 // Leftover Seconds
= 26
```

Human-Readable Time!

```js
4d 10h 8m 26s
```

[comment]: # (!!!)

### Change

```js
(2_00 - 1_82) / 25 // Quarters
= 0
18 % 25
= 18 // Leftover Pennies
```

```js
18 / 10 // Dimes
= 1
18 % 10
= 8 // Leftover Pennies
```

```js
8 / 5 // Nickels
= 1
8 % 5
= 3 // Leftover Pennies
```

Tillable Change!

```txt
0 x 25¢
1 x 10¢
1 x 5¢
3 x 1¢
```

[comment]: # (!!!)

# Also

[comment]: # (!!! data-auto-animate)

# Also

Great for coding interviews...

[comment]: # (!!! data-auto-animate)
