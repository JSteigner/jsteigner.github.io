
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * input: limit numbers
 * output: '#' repeating incrementally
 * constraints: each new line should increase '#'
 * edge case: use .repeat() method
 */

function triangles(num) {
    for(var i= 1; i <= num; i++) {
      console.log('#'.repeat(i));
    } return triangles;
}   
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
     for(var i = 1; i <= 15; i++) {
       if (0 === i % 3 && 0 === i % 5) {
           console.log("fizzbuzz");
       }
       else if (0 === i % 3) {
           console.log("fizz");
       }  else if (0 === i % 5) {
           console.log("buzz"); 
       }  else {
           console.log(i);
       }
   }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
let check = ''.repeat;
function drawChessboard(size) {
      for(let i = 0; i <= size; i++) {
        for(let j = 0; j <= size; j ++) {
          
        }
      } 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
