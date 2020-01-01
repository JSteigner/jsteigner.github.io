
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
// print numbers from 1 through 15
// for numbers divisible by 3 print 'fizz', for numbers divisible for 5 print 'buzz',
// for numbers divisible by both print 'fizzbuzz'
// use % operator to find out which numbers are multiples
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
// I: size of board both vertically and horizontally
// O: print to the console a 2 dimensional square string
// C: ensure the string starts off with a space and then alternate with a'#'
// E C: use a nested loop
function drawChessboard(size) {
    let check = '';
      for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j ++) {
          if ((i + j) % 2 === 0) {
                check += ' ';
          } else {
                check += '#';
          }
        }  check += '\n';
      } 
        console.log(check);
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
