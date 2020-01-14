/**
 * Operators:
 * 0. Operators are a tool used to perform arithmetic operations on values, assign values, and compare values.
 */
 
// 1. Assignment Operators //
var myName = 'Jay';
console.log(myName); // prints => Jay
/**
 * Assignment operators are used to assign values to variables. They consist of: =, +=, -=. *=, /=, %=, **=, <<=, >>=, >>>=,
 * &=, ^=, and |=. 
 */
 
// 2. Arithmetic Operators //
var addNumbers = 1 + 2;
console.log(addNumbers); // prints => 3
var subtractNumbers = 3 - 2;
console.log(subtractNumbers); // prints => 1
var multiplyNumbers = 5 * 6;
console.log(multiplyNumbers); // prints => 30
var divideNumbers = 30 / 5;
console.log(divideNumbers);  // prints => 6
var getRemainderNumbers = 5 % 2;
console.log(getRemainderNumbers);  // prints => 1
var z = 1;
var increment = z++;
console.log(increment); // prints => 2
var a = 2;
var decrement = --a;
console.log(decrement); // prints => 1
var exponentiation = 3 ** 2;
console.log(exponentiation);  // prints => 9
/**
 *  The arithmetic operators are used to perform arithmetic on values. They consist of: +, -, *, /, %, ++, --, -, +, and **.
 */
 
 // 3. Comparison Operators //
 let x = 3;
 let y = 2;
 if(x > y) {
     console.log(true); // prints => true
 }
 /**
  * Comparison operators are used to create a boolean value of true or false and are used in conditional statements.
  * They consist of: ==, ===, != ,!==, > , <, >=, <=. The strictly equal operator '===' differs from the loosely equal operator
  * '==' in that the strictly equal one compares two pieces of data and they must be exactly alike and contain the same data type 
  * to return true but the loosely equal to operator will try to convert the data to the same type and then compare that.
  * The same concept applies to the strictly not equal to '!==' and the loosely not equal to '!=' operators.
  */
  
  //4. Logical Operators //
  let j = 2;
  let k = 3;
  if(j < k && j > 0) {
      console.log(true); // prints => true
  }
  if(j > 0 || k > 0){
   console.log(true);  // prints => true
  }
  if(!k){
   console.log(false);  // prints => false
  }
  /**
   * Logical operators take into account multiple possiblities, and before they can run the code inside their code block, the value must result 
   * in a true boolean. The && operator takes into account at least two possiblities and the result of both of these must evaluate to true for 
   * the code to run. The || operator take into account at least two possibilites and will run the code if either of them evaluate to a true value.
   * The ! operator makes the opposite of the conditional the desired output so false will need to be achieved to run the code.
   * They consist of: &&, ||, !.
   */
   
   // 5. Unary Operators(!, typeof, -, +) //
   var unaryNegativeNumber = -3;
   console.log(unaryNegativeNumber); // => prints -3
   var unaryPositiveNumber = +3;
   console.log(unaryPositiveNumber); // => prints 3
   var greeting = 'Hello';
   console.log(typeof greeting);  // => prints => string
   var myObj = {name : 'Jay'};
   delete myObj.name;
   console.log(myObj);  // => prints => {}; an empty object literal
   /**
    * An Unary operator takes one argument and executes a task. It can come either before or after the argument.
    * The bang operator (!) produces oppsite of the value. 
    * The typeof operator will return a string that is the type of data that the value is.
    * The unary(-) operator will convert its value into a number and then negate it.
    * The delete operator deletes an object, an object's property, or an element at a specified index of an array.
    */
    
    // 6. Ternary Operators(a? b: c) //
    function getWeather(weather) {
        return (weather ? 'sunny': 'cloudy');
    }
    console.log(getWeather(true)); // => prints => sunny
    /**
     * The ternary operator is a shortcut for an if-else statement. It takes three operands: a testing condition 
     * followed by a question mark,  then a second operand that will return if true is achieved followed by a colon,
     * then a third operand which will return if false is achieved.
     */