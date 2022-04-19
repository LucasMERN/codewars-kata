//URL--https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// 
 
//INSTRUCTIONS--
/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/ 
 
//SOLUTION--
/* This one was fairly simple. Just a basic conditional that return a specific string based on the name of the owner.*/ 

const greet = ((name, owner) => name === owner ? 'Hello boss' : 'Hello guest')

//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
  Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    });
  });