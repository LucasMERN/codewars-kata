//URL--https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// 

//INSTRUCTIONS--
/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/ 

//SOLUTION--
/* This one was actually really fun! I have not had to use any cases inside of my for loop that checked for anything that wasn't a standalone
value and I have also never used an iteration that wasn't i++ or i--. Glad I was forced to think a little outside of the box to solve this one!
Let's break it down. We start with an empty array to hold our data. Since z is declared as an array we can use the push method on z which adds
some convenience. So we check if the value of the first argument is less than or equal to the value of the product of the x and n parameters.
Then we add X + X to the variable of I to iterate by multiples and push those into our empty array! And then we just return our new array!
*/
function countBy(x, n) {
    let z = [];
    for(let i = x; i <= x*n; i += x){
      z.push(i)
    }
    return z;
  }

//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
  });
});