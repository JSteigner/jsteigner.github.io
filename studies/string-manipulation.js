/**
 * String Manipulation
 * 0. String manipulation consists of actions you can perform on the string data type.
 */
 
 // 1. With Operators //
 var myString = 'Hello' + ' ' + 'World' + ' ';
 console.log(myString); // prints => Hello World;
 var word = 'how are you';
 myString += word;   // prints => Hello World how are you;
 /**
  * String manipulation with operators allows you to combine different strings together.
  */
  
  // 2. With Methods //
  var string = 'hello';
  console.log(string.toUpperCase());  // prints => HELLO;
  var str = 'BYE';
  console.log(str.toLowerCase());   //  prints => bye;
  console.log(string.slice(1));    // prints => ello;
  console.log(string.charAt(0));   // prints => h;
  console.log(string.concat(str));  // prints => helloBYE;
  var spaceStr = '    whats up     ';
  console.log(spaceStr.trim());   // prints => whats up;
  /**
   * String manipulation with methods allows us to apply built in functions on strings. There are many different
   * methods that can be used.
   */