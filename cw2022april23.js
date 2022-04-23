//URL--https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// 
 
//INSTRUCTIONS--
/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/ 
 
//SOLUTION--
/* So first I map all of the items in the x array to convert them into integer form. I assign that array to a new array and then run the reduce
method on the new array to add all of the values together and return the resulting sum! I could chain these together and drop the new array
declaration but I feel as though that way is much harder to read and digest.
*/ 

function sumMix(x){
    let noStringNums = x.map(item => Number(item));
    return noStringNums.reduce((a,b) => a+b);
  }

//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
  })
});