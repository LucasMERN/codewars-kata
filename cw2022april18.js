//URL--https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
// 
 
//INSTRUCTIONS--
/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/ 
 
//SOLUTION--
/* I refactored the original foundation for the function to take on a more concise arrow function with the ternary operator syntax. If the length
and width are the same it is a square so we return the length multiplied by the width. If they are not the same that means that are a rectangle and
we will add the lengths and the widths together to get a perimeter.
*/ 
const areaOrPerimeter = ((l , w) => l == w ? l * w : l + l + w + w)
  
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
  Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
    });
  });