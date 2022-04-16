//URL--https://www.codewars.com/kata/55f2b110f61eb01779000053
// 
 
//INSTRUCTIONS--
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/ 
 
//SOLUTION--
/* If the two numbers are the same then theres nothing inbetween them to add up so the answer is the same as the value of the passed in argument.
if one of the arguments is less then the either we will add the value of least to the value of the parameter and iterate the parameter until it is
equal in value to the other argument while adding it to our least "counter" on every iteration. then we just return the variable least for our answer.
*/ 
function getSum( a,b ){
    let least = 0
    if(a === b)
      return a;
    if(a < b){
      for(; a <= b; a++){
        least += a;
      }
    } else if(a > b){
      for(; b <= a; b++){
        least += b;
      }
    }
    return least;
  }
  
//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1),-1);
    assert.strictEqual(getSum(0,1),1);
  })
});