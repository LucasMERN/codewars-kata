//URL--https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// 
 
//INSTRUCTIONS--
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/ 
 
//SOLUTION--
/* so we get a large integer and the only way to sort them is to split them but to split them they need to be strings. I started by converting the parameter
to a string so I can split the now seperated integers into an array and call the array sort method on it to set the array into chronological order. 
I opted to use b-a here instead of a-b so I would not have to reverse the order from ascending to descending order later on. I then join the sorted 
array back into a single number(as a string type) and then changed the entire value of the return into an integer!
*/ 
function descendingOrder(n){
    return Number(String(n).split('').sort((a,b) => b-a).join(''))
  }
  
//TESTCASES--
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })