//URL--https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
// 
 
//INSTRUCTIONS--
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/ 
 
//SOLUTION--
/* So if the string passed into the url argument contains an octothorpe it will return the string with 
everything from the index of the octothorpe cut out. If the url does not contain an octothorpe it will not be effected.
*/ 
function removeUrlAnchor(url){
    if(url.includes('#')){
    return url.slice(0, url.indexOf('#'));
  } else {
    return url;
    }
  }
  
//TESTCASES--
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })