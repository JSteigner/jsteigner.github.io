// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
// I: number
// O: number
// create factorial with recursion
var factorial = function(n) {
  if (n === 0){
    return 1; // base case
  } else if( n < 0) {
    return null;
  }
  return n * factorial(n - 1); // recursive case
};

// I: array
// O: number sum
// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if(array.length === 0){  // base case
    return 0;
  } return array[0] + sum(array.slice(1));  // recursive case
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};
// I: number
// O: number
// check if a number if even
// 4. Check if a number is even.
var isEven = function(n) {
  if( n === 1){    // base case
    return false;
  } else if( n === 0){   // base case
    return true;
  } else if( n < 0){
    return isEven (n + 2);  // recursive case
  } return isEven(n - 2);   // recursive case
};
// I: number
// O: a number sum of all the integers below input number
// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){  // base case
    return n;
  } else if(n < 0){  
    return n + 1 + sumBelow(n + 1);  // recursive case
  } 
  return n - 1 + sumBelow(n - 1);   // recursive case
};

// I: two numbers
// O: the range of numbers between the two numbers
// E C: dont include start or end number in new array
// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
   let arr = [];
   if(x === y || (x - y) === 1 || (y - x) === 1){  // base case
     return  arr;
   }  
   if( x < y){
      arr.unshift(x + 1);
      return arr.concat(range(x + 1, y));   // recursive case
   } if (x > y){
      arr.push(x - 1);
      return arr.concat(range(x - 1, y));   // recursive case
   }
};
// I: base number; number to use as an exponent
// O: the production of base number to the exponent power
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
   if (exp === 0){     // base case
       return 1;
  } 
    if(exp > 0) {
        return base * exponent(base, exp - 1);   // recursive case
  } else {
         return 1 / (base * exponent(base, -1 * exp - 1));  // recursive case for negatives // ask for help!!
  }
};

// I: number
// O: boolean
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {   // base case
    return true;
  }
  if (n === 0 || n % 2 === 1) {  // base case
    return false;
    }
  return powerOfTwo(n / 2);    // recursive case
};

// I: string
// O: a modified string in reverse
// 9. Write a function that accepts a string and reverses it.
var reverse = function(string) {
  if (string === ""){  // base case
    return "";
  } else {
    return reverse(string.substr(1)) + string.charAt(0);  // recursive case
  }
};

// I: string
// O: boolean; true if input string is a palindrome, false otherwise
// E C: compensate for spaces
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase(); // ensure case sensitivity
  let regex = /\s/gi;  // take out spaces with regex
  string = string.replace(regex, '');
  var firstCharacter = function(str) { // extract first character
    return str.slice(0, 1);
};
var lastCharacter = function(str) { // extract last character
    return str.slice(-1);
};
var middleCharacters = function(str) { // extract middle characters
    return str.slice(1, -1);
};
  if (string.length < 2) { // base case
        return true;
    }
    if (firstCharacter(string) === lastCharacter(string)) { //recursive case
        return palindrome(middleCharacters(string));
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// I: two numbers
// O: product of the two numbers multiplied
// C: cannot use * or Math object
// set up a base case so function call will end if x or y is zero
// recursive call, if y is positive will add x to the product of passing(x, y - 1) back into function
// if y is negative, -x will be added to the product of passing(x, y + 1) back into function

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y){  
     if( x === 0 || y === 0){ 
       return 0;
     }  else if (y < 0){
      return -x + multiply(x, y + 1);  
     } else{
       return x + multiply(x, y - 1);  
     }
};
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// I: two strings
// O: boolean; true if they are equal, false if not

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1.length === 0 && str2.length === 0){ // base case
      return true;
    }  else if(str1.charAt(0) !== str2.charAt(0)){ // check if first characters are equal on each function call
      return false;
    } return compareStr(str1.substr(1), str2.substr(1)); // recursive call
};

// I: string
// O: array with each letter from input string taking an index

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
   let arrStr = []; // create empty array
   if(str.length === 0){
     return arrStr; // base case
   } arrStr.push(str[0]); // push first element to new array
   return arrStr.concat(createArray(str.slice(1))); // recursive call
};

// I: array
// O: array in reverse order

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(array.length === 0){ // base case
    return [];
  } let revArr = []; // create new array
    return revArr.concat(reverseArr(array.slice(1)), array[0]); // recursive call; pass through an array with first index sliced off
};                                                              // and concatenate the output with first index of original array

// I: number value and a length 
// O: a new array with the input value at each index and array will be as long as given length

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let valArr = [];
  if(valArr.length >= length){ // base case
    return [];
  } valArr.push(value); // push value to new array
  return valArr.concat(buildList(value, length - 1)); // recursive case; decrease length by 1
};

// I: an array of values and a value
// O: number representing the count of occurences that value occurs in array

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if(array.length === 0){ // base case
      return 0;
    }
    return (array[0] === value) + countOccurrence(array.slice(1), value); // recursive call; if element equals value add to recursive call
};

// I: array and a callback function
// O: modified new array

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let mapArr = [];
   if(array.length === 0){  // base case
     return [];
   } mapArr.push(callback(array[0])); // push zero index value to new array
   return mapArr.concat(rMap(array.slice(1), callback)); // recursive call; slice off rest of original array, from first index to the end, and pass that
 };                                                     // back into function along with callback function as arguments. Then concat the product
                                                        // of that with the new array until original array length equals 0.

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// I: number representing the index position of the Fibonacci sequence
// O: the number value that corresponds to that index

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n === 1){ // base case
    return n;
  } else if (n < 0){ // account for negative numbers
    return null;
  }
  return nthFibo(n - 1) + nthFibo(n - 2); // recursive call; return the sum of recursive(n - 1) and recursive(n - 2)
};

// I: array of words
// O: a new array with each word capitalized

// 26. Given an array of words, return a new array containing each word with all letters capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  let allCapitalArr = []; // create new array
  if(input.length === 0){ // base case
    return [];
  } allCapitalArr.push(input[0].toUpperCase()); // capitalize all letters in word and push to new array
   return allCapitalArr.concat(capitalizeWords(input.slice(1))); // recursive case
};

// I: array of strings
// O: modified array with first letter of each word capitalized

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  let firstCapArr = []; // create new array
  if(array.length === 0){ // base case
    return [];
  } firstCapArr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1)); // push modified word to new array
  return firstCapArr.concat(capitalizeFirst(array.slice(1)));   // recursive call
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// I: string
// O: object containing count of each letter
// need to create a return object where each character is a key and its count is the corresponding value

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  let objResult = Array.from(arguments)[1] || {};  // return an object literal because we want to output an object
  if(str.length === 0){  // base case
    return objResult;           
  } if(!objResult[str[0]]){
    objResult[str[0]] = 1; // if letter has not occurred already, assign it the key value of one
  } else {
    objResult[str[0]]++;   // if letter has occurred already, increase the key value by one
  }
  return letterTally(str.slice(1), objResult);  // recursive case
};

// I: an array
// O: new array with consecutive duplicates removed

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  let filteredArr = [];
  if(list.length === 0){  // base case
    return [];
  } if (list[0] !== list[1]){  // if first number does not equal second number then move number to the front of the new array
     filteredArr.unshift(list[0]);
  } return filteredArr.concat(compress(list.slice(1))); // recursive call; concat them all together at the end
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// I: array of numbers
// O: a modified number array that has consecutive zeros resolved to a single zero

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
   let modZeroArr = [];
   if(array.length === 0){  // base case
     return [];
   } 
   if(array[0] === 0 && array[1] !== 0){ // if first number is a zero and second number is not a zero then add it to new array
      modZeroArr.push(array[0]);
     }
     if(array[0] !== 0 && array[1] !== 0){ // if first number is not zero and second number is not zero then add it
        modZeroArr.push(array[0]);
      }
      if(array[0] !== 0 && array[1] === 0){ // if first number is not zero and second number is zero then add it
        modZeroArr.push(array[0]);
      }
   return modZeroArr.concat(minimizeZeroes(array.slice(1)));  // recursive call
};

// I: an array of numbers
// O: a modified array where each number alternates between positive and negative
// C: the first number in the index always needs to be positive 

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
   let alternateArr = [];  // create new array
   if(array.length === 0){  // base case
     return [];
   }   
      array[0] = +Math.abs(array[0]);   // make first number positive with +Math.abs()
      array[1] = -Math.abs(array[1]);   // make second number negative with -Math.abs()
      alternateArr.unshift(array[0]);   // add first number to beginning of array
      alternateArr.push(array[1]);      // add second number to back of the array
   return alternateArr.concat(alternateSign(array.slice(2)));   // recursive call; slice at two because you want to keep first two indexes
};


// I: string
// O: modified string with numbers converted to their word equivalent

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
   let numNameStr = '';  // create a string variable
   if(str.length === 0){   // base case
     return '';            // return empty string because we want a string output
   }  else if(str[0] === '1'){  // if the first element equals the string of '1' then assign that value a string
      numNameStr = 'one';       // of 'one' to the new string and so on for each number digit
    } else if(str[0] === '2'){
      numNameStr = 'two';
    } else if(str[0] === '3'){
      numNameStr = 'three';
    } else if(str[0] === '4'){
      numNameStr = 'four';
    } else if(str[0] === '5'){
      numNameStr = 'five';
    } else if(str[0] === '6'){
      numNameStr = 'six';
    } else if(str[0] === '7'){
      numNameStr = 'seven';
    } else if(str[0] === '8'){
      numNameStr = 'eight';
    } else if(str[0] === '9'){
      numNameStr = 'nine';
    } else{
    numNameStr += str[0];  // add modified number words and other elements that were not numbers to new string
  } return numNameStr.concat(numToText(str.slice(1))); // recursive case;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
