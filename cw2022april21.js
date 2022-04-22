//URL--https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
// 
 
//INSTRUCTIONS--
/* The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/ 
 
//SOLUTION--
/* It gave us a barebones function to work with that already had the entire syntax filled out. It wanted us to figure out what was wrong.
All I had to do to solve it was change the word 'name' in the case body to the keyword 'return' which you can see below. if you just reassign
the variable name to the value given inside of the cases and then return name at the end you will always just be returning neptune. So now
we return something new for each case. Prettyyyyyyy simple.
*/ 
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        return 'Mercury'
      case 2:
        return 'Venus'
      case 3:
        return 'Earth'
      case 4:
        return 'Mars'
      case 5:
        return 'Jupiter'
      case 6:
        return 'Saturn'
      case 7:
        return 'Uranus'
      case 8:
        return 'Neptune'
    }
    
    return name;
  }
//TESTCASES--
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(getPlanetName(2), 'Venus');
  Test.assertEquals(getPlanetName(5), 'Jupiter');
  Test.assertEquals(getPlanetName(3), 'Earth');
  });
  });
  