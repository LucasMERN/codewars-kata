//URL--https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// 
 
//INSTRUCTIONS--
/* Write function RemoveExclamationMarks which removes all exclamation marks from a g
*/ 
 
//SOLUTION--
/* I've done this method before. I split the string by the character I want it to remove and then glue it back together using the join method with
an empty string inside of the method argument.
*/ 
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }
//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});