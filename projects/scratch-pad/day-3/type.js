// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 /**
  * input: value
  * output: true or false
  * constraints: return true if value is an array or false if not
  * edge case: use Array.isArray method
  */
  
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) === true) {
        return true;
       } else {
            return false;
        }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 /**
  * input: value
  * output: true or false
  * constraints: return true if value is an object or false if not
  * edge case: need to create a boolean statement with use of typeof and .constructor
  */
  
function isObject(value) {
    // YOUR CODE BELOW HERE //
     if (value && typeof value === 'object' && value.constructor === Object) {
         return true;
     }  else {
         return false;
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 /**
  * input: value
  * output: true or false
  * constraints: return true if value is an array or an object false if otherwise
  * edge case: need to create a boolean statement with use of typeof and .constructor to test if its an object
  *           and use Array.isArray to test for array, these need to be separated with || (or)
  */
  
function isCollection(value) {
    // YOUR CODE BELOW HERE //
     if (value && typeof value === 'object' && value.constructor === Object || Array.isArray(value) === true) {
         return true;
     }  else {
         return false;
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 /**
  * input: value
  * output: type of value as a string
  * constraints: instead of typeof we need to use instanceof to test for date, Array.isArray for array, and null for null
  * edge case: ensure they dont all return as objects
  */
  
function typeOf(value) {
    // YOUR CODE BELOW HERE //
        if (value === null) {
            return 'null';
        }  else if (value instanceof  Date) {
            return 'date';
        }  else if (Array.isArray(value)) {
            return 'array';
        }   else {
        return typeof value;
}
    
        
    

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
