//URL--https://www.codewars.com/kata/52fba66badcd10859f00097e
// 
 
//INSTRUCTIONS--
/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/ 
 
//SOLUTION--
/* I decided to use regular expression syntax to target all of the vowels and delete them out of the string. 
Then we just return the newly mutated string!
*/ 

function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'')
  }

//TESTCASES--

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })