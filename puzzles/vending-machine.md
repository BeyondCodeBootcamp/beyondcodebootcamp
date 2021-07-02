# The Vending Machine

You're going to write a program for a vending machine to calculate the ideal change to give back to a customer purchasing items (i.e. the least number of bills and coins).

The vending machine can tender the following denominations:

- $5.00
- $1.00
- 25¢
- 10¢
- 5¢
- 1¢

Write a function `getIdealChange` that
- receives the total cost of items purchased and the total cash given
- returns the ideal number of each denomination

```js
function getChange(totalCash, totalCost) {
  //      $5 $1 25¢ 10¢ 5¢ 1¢
  return [ 0, 0, 0, 0, 0, 0 ];
}
```
