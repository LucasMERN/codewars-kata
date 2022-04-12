//URL--https://www.codewars.com/kata/559590633066759614000063/train/javascript
// 
 
//INSTRUCTIONS--
/* 
Story
Ben has a very simple idea to make some profit: he buys something and sells 
it again. Of course, this wouldn't give him any profit at all if he was 
simply to buy and sell it at the same price. Instead, he's going to buy 
it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the 
given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
*/ 
 
//SOLUTION--
/* So i decided to use the sort function to arrange the array from 
low to high numerically and then I just return the index of 0 and the index
of the last element within the array. Simple as that!
*/ 
function minMax(arr){
    const profits = arr.sort(function(a,b){
      return a-b;
    })
    return [arr[0], arr[arr.length-1]];// fix me!
  }
  
//TESTCASES--
const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});