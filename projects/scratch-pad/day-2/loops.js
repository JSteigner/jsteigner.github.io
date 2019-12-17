// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 /* start: beginning of array
 * end: end of array
 * increment by 1
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i <= array.length; i++) {
    console.log(array[i]);
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 /* start: array.length - 1
 * end: array[0]
 * decrease by 1
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
 /**
  * create a for in loop that accesses the object keys and then return to my keys array
  */
  
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     var keys=[];
     
     for(var key in object) {
        keys.push(key);
     } 
     console.log(keys, '!!!!!!!!!!!!!');
     return keys;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 /**
  * create a for in loop that uses console.log to print keys to the console
  */
  
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     for (var key in object) {
       console.log(key);
     }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 
 /**
  * use a for in loop to access the values in an object and then push those to values array,
  * then outside of the loop return values array
  */
  
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var values = [];
  for(var key in object) {
    values.push(object[key]);
  } return values;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
 /**
  * use a for in loop to access values in an object and then console.log the values to console
  */
  
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
     for(var key in object) {
       console.log(object[key]);
     }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
 
 /**
  * create a count variable set to equal 0,
  * use a for in loop to loop over key/value pairs in object
  * use an if-else conditional along with Object.prototype.hasOwnProperty.call method on object and key parameters
  * if this boolean is true than incremtent count by 1
  * else return count
  */
  
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var count = 0;
  for (var key in object) {
   if (Object.prototype.hasOwnProperty.call(object, key)) {
            count++;
        }
  } return count;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 /* loop over object in reverse and print values to console
 * created an array literal
 * created a for in loop to list key/values
 * pushed values to array arr
 * created for loop to loop backwards over array
 * start: arr.length - 1
 * end: 0
 * decrease by 1
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  for(var key in object) {
    arr.push(object[key]);
  } 
  for (var i = arr.length - 1; i >= 0; i--){
   console.log(arr[i]);
} 
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
