//URL--https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// 
 
//INSTRUCTIONS--
/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.
*/ 
 
//SOLUTION--
/* Havent done a long else if function for a while so this was a fun little refresher for me. Also, had I arranged this conditionals in a different
order this function would not work properly. BUT since I have my smallest value checked first I can go in ascending order and it will work just fine.
Not much to it, just checking if the month is in a certain quarter of the year and returning which quarter it is in.
*/ 

const quarterOf = (month) => {
    if(month < 4){
      return 1;
    } else if(month < 7){
      return 2;
    } else if(month < 10){
      return 3;
    } else if(month < 13){
      return 4;
    }
  };

//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});