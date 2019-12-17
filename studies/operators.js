/**
 * Operators:
 * 0. Operators are a tool used to perform arithmetic operations on values, assign values, and compare values.
 */
 
// 1. Assignment Operators //
var myName = 'Jay';
console.log(myName); // prints Jay
/**
 * Assignment operators are used to assign values to variables
 */
 
// 2. Arithmetic Operators //
var addNumbers = 1 + 2;
console.log(addNumbers); // prints => 3
/**
 *  The arithmetic operators are used to perform arithmetic on values. They consist of: +, -, *, /, %.
 */
 
 // 3. Comparison Operators //
 let x= 3;
 let y = 2;
 if(x > y) {
     console.log(true); // prints true
 }
 /**
  * Comparison operators are used to create a boolean value of true or false and are used in conditional statements.
  * They consist of: ==, ===, != ,!==, > , <, >=, <=.
  */
  
  //4. Logical Operators //
  let z = 2
  let a = 3
  if(z < a && z > 0) {
      console.log(true); // prints true
  }
  /**
   * Logical operators take into account multiple possiblities before creating a boolean.
   * They consist of: &&, ||, !.
   */
   
   // 5. Unary Operators(!, typeof, -) //
   var unaryNumber = -'3';
   console.log(unaryNumber); // => prints -3
   /**
    * An Unary operator takes one argument and executes a task. It can come either before or after the argument.
    * The bang operator (!) produces oppsite of the value. 
    * The typeof operator will return a string that is the type of data that the value is.
    * The unary(-) operatot will convert its value into a number and then negate it.
    */
    
    // 6. Ternary Operators(a? b: c) //
    function getWeather(weather) {
        return (weather ? 'sunny': 'cloudy')
    }
    console.log(getWeather(true)); // => prints sunny
    /**
     * The ternary operator is a shortcut for an if-else statement. It takes three operands: a testing condition 
     * followed by a question mark,  then a second operand that will return if true is achieved followed by a colon,
     * then a third operand which will return if false is achieved.
     */