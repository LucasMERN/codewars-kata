//URL--https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript/62491e9658ad0600326538b0
// 
 
//INSTRUCTIONS--
/* Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/ 
 
//SOLUTION--
/* First I'll create a variable and assign it to 0. This variable will hold the info that needs to be returned. 
Then I'll construct a for loop to iterate from 0 until it becomes the same value as the integer that gets passed into the parameter for our argument.
Then if the number (i) has a remainder of 0 when divided by 3 or 5 we just add that number to our num variable and return that as our answer!
*/ 
function findSum(n) {
    let num = 0
    for(let i = 0; i <= n; i++)
      if(i % 3 === 0 || i % 5 === 0){
        num += i;
      }
    return num;
  }
  
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(findSum(5), 8);
  Test.assertSimilar(findSum(10), 33);
    });
  });