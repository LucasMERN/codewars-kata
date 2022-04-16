//URL--https://www.codewars.com/kata/542c0f198e077084c0000c2e
// 
 
//INSTRUCTIONS--
/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/ 
 
//SOLUTION--
/* First we make a counter to hold the data and then iterate from 1 until we reach the value of n. 
during every iteration we will perform the modulus operator on i against n and if there is no remainder 
then we add 1 to our total counter. Then we return the counter variable to recieve our expected result.
*/ 
function getDivisorsCnt(n){
    let count = 0
    for(let i = 1; i <= n; i++) {
      if(n % i === 0){
        count += 1
      }
    }
    return count
  }
  
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(getDivisorsCnt(1) , 1);
  Test.assertEquals(getDivisorsCnt(10) , 4);
  Test.assertEquals(getDivisorsCnt(11) , 2);
  Test.assertEquals(getDivisorsCnt(54) , 8);
    });
  });
  