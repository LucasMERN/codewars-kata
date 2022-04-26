//URL--https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
// 
 
//INSTRUCTIONS--
/* Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. 
Write a function to help Bob with this calculation.
*/ 
 
//SOLUTION--
/* Simple math eqution. You just return the product of the parameters. Not much else to say about it.
*/ 
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(Kata.getVolumeOfCuboid(1,2,2), 4);
  Test.assertEquals(Kata.getVolumeOfCuboid(6.3,2,5), 63);
    });
  });
  