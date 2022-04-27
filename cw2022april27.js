//URL--https://www.codewars.com/kata/5390bac347d09b7da40006f6
// 
 
//INSTRUCTIONS--
/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his 
philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to
 capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not 
capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/ 
 
//SOLUTION--
/* So here I decided to create an empty array to push all of my new content into for my return. 
I'm splitting the passed in string by the space inbetween each word. this will allow me to easily
loop through the array and select the indexes I need to select for capitalization. Then I select the rest of each string
by the index of 1 and push that to my result array before I join all of the mutated words back together by the space that seperated them before.
*/ 
String.prototype.toJadenCase = function () {
    let result = [];
    let string = this.split(' ')
    for(let i = 0; i < string.length; i++){
      result.push(string[i][0].toUpperCase() + string[i].slice(1))
      }
    return result.join(' ')
  };
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  var str = "How can mirrors be real if our eyes aren't real";
  Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
  });
  
  