// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
 /**
  * return a strings length
  * use .length to find the length of string
  */
function length(string) {
    // YOUR CODE BELOW  //
    var wordLength=string.length;
    return wordLength;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */ 
 
 /**
  * use .toLowerCase() to force lowercase on string
  */
  
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
 
 /**
  * use .toUpperCase() to force uppercase on string
  */
  
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //


return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()h
 */
 
 /**
  * convert string to dash-case
  * replace to space with a dash using regex inside of .replace(); / /gi
  * force lowercase with .toLowerCase()
  * 
  */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
           var regex = / /gi;  
              string = string.toLowerCase();
       
       return string.replace(regex, '-');
      
       


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
 /**
  * return true if input string begins with char parameter
  * input: string + char
  * output: true if first char of string matches char
  * constraints: 
  * edge case: ensure case insensitivity
  */
  
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
       if (string[0].toUpperCase() === char.toUpperCase()) {
           return true;
       } else {
           return false;
       }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
 /**
  * return true if input string ends with char parameter
  * input: string + char
  * output: true if last char of string matches char
  * constraints: 
  * edge case: ensure case insensitivity
  */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
              
if (string[string.length - 1].toUpperCase() === char.toUpperCase()) {
           return true;
       } else {
           return false;
       }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
 
 /**
  * add two stings together into one string
  * input: two strings
  * output: one string composed of two input strings
  * constraints: 
  * edge case: use addition operator
  */
  
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
      return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
 /**
  * return all strings joined together
  * input: any number of strings
  * output: all input strings joined together
  * constraints: 
  * edge case: use for loop to iterate over arguments array
  */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE
    var holder = "";
    var args = Array.from(arguments);
    for (var i = 0; i < args.length; i++) {
        holder += args[i];
    }
    return holder;
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
 
  /**
  * return longest of two strings
  * input: two strings
  * output: longest string
  * constraints: 
  * edge case: use if-else conditional with greater than operator to test which is longest
  */
  
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
       if (stringOne.length > stringTwo.length) {
           return stringOne;
       } else {
           return stringTwo;
       }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
  /**
  * input: two strings
  * output: return 1 if first string is higher in alphabetical order than second, return -1 if the second is higher,
  * return 0 if they are equal
  * constraints: 
  * edge case: use .localeCompare
  */
  
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.localeCompare(stringTwo) === 1) {
        return -1;
    } else if (stringOne.localeCompare(stringTwo) === -1) {
        return 1;
    } else return 0;
       


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
  /**
  * input: two strings
  * output: return 1 if first string is lower in alphabetical order than second, return -1 if the second is lower,
  * return 0 if they are equal
  * constraints:
  * edge case: use .localeCompare
  */
  
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
       if (stringOne.localeCompare(stringTwo) === 1) {
        return 1;
    } else if (stringOne.localeCompare(stringTwo) === -1) {
        return -1;
    } else return 0;



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
