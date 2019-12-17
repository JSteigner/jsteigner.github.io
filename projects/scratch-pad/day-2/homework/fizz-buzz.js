// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/**
 * input: numbers from 1-100
 * output: numbers from 1-100
 * constraints: for multiples of three print'fizz', and multiples of five print 'buzz', and for multiples of both print 'FizzBuzz'
 * edge case: use the modulus operator with conditional if else-if else statements
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
   for(var i = 1; i <= 100; i++) {
       if (0 === i % 3 && 0 === i % 5) {
           console.log("FizzBuzz");
       }
       else if (0 === i % 3) {
           console.log("Fizz");
       }  else if (0 === i % 5) {
           console.log("Buzz"); 
       }  else {
           console.log(i);
       }
   }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}