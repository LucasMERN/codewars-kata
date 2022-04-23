//URL--https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// 
 
//INSTRUCTIONS--
/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/ 
 
//SOLUTION--
/* If we weren't sleeping in basic math in grade school, we all know that the angles of all triangles add up to 180 degrees. So you simple return
the difference of 180 from the sum of the arguments passe din for a and for b.
*/ 
function otherAngle(a, b) {
    return 180 - (a+b);
  }
//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});