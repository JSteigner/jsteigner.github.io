// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 /**
  * return a function that tests whether a given value is greater than original base value.
  * created a return statement which creates a function with a value parameter
  * created a conditional if else statement which checks if value is greater than base
  */
  
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 return function(value){
    if (value > base) {
        return true;
    } else {
       return false;
    }
    };

    
    
    
    // YOUR tCODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 /**
  * return a function that tests whether a given value is less than original base
  * created a return statement that contains a function with a parameter of value;
  * created a conditional if else statement that checks whether value is less than base or not
  */
  
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
    if (value < base) {
        return true;
    } else {
       return false;
    }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 /**
  * created a return statement that contains a function with a parameter of string;
  * created an if else statement that checks if first index of string equals 'startsWith'
  * and used .toLowerCase() to ensure capitilization
  */
  
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
    if (string[0].toLowerCase() === startsWith.toLowerCase()) {
        return true;
    } else {
       return false;
    }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
 /**
  * input: endsWith character
  * output: a function that tests whether a given string ends with the endsWith character
  * constraints: 
  * edge case: ensure case insensitivity
  */
  
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     return function(string){
    if (string[string.length-1].toLowerCase() === endsWith.toLowerCase()) {
        return true;
    } else {
       return false;
    }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 /**
  * input: array of strings and a function
  * output: modified array of strings
  * constraints: 
  * edge case: need to pass array into the function
  */
  
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var stringArray = [];
    for (var i = 0; i <= strings.length-1; i ++) {
        stringArray.push(modify(strings[i]));
    }  return stringArray;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 /**
  * input: array of strings and function designed to test strings
  * output: true if all strings pass function test
  * constraints: need to loop over strings
  * edge case: create true boolean
  */
  
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for ( var i = 0; i < strings.length; i++) {
       if (test(strings[i]) === false) {
          return false;
       } 
    }
    return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}