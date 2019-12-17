/**
 * Data Types
 * 0. Data types are the information that we are putting into our variable containers. There are many different data types
 */
 
 // 1. Number // 
 var numberOne = 1;
 console.log(numberOne); // prints => 1
 /**
  * Number data type can be any numerical value
  */
  
  // 2. String //
  var string = "Hello";
  console.log(string); // => prints Hello
  /**
   * A string is a collection of characters or symbols surrounded by quotes
   */
   
   // 3. Boolean //
   var boolean = true;
   console.log(boolean); // prints => true
   /**
    * A boolean is a true or false value
    */
    
    // 4. Array //
    var myArray = ['Hello', 7, null];
    console.log(myArray); // => prints ['Hello', 7, null]
    /**
     * An array is a complex data type that is a collection of data. The data that goes into the array must be enclosed by
     * brackets. Arrays can hold any kind of data and can also hold multiple types of data. Every data type is stored at 
     * an individual number index of the array which is accesssible through bracket notation. The first index starts at 0.
     */
    
    // 5. Object //
    var myObject = {
        key1: 'value1',
        key2: 'value2'
    };
    console.log(myObject); // prints => {key1: 'value1', key2: 'value2'}
    /**
     * Objects are another complex data type. The data that goes into an object must be enclosed with curly braces.
     * Instead of using indexes like arrays, objects store data in key/value pairs. The key is a property of the object
     * and the value correlates with the key. Objects can contain references to any other data type. You can add 
     * keys or values to an object through dot notation or bracket notation.
     */
     
     // 6. Function //
     var myFunction = function addition(hello, world) {
      return hello + world;
     }; 
     console.log(myFunction); // prints [Function: addition]
     /**
      * Functions are reusable blocks of code that take in inputs(called parameters), modify those inputs, then return a new data value.
      * Functions perform an action on their parameters.
      */
      
      // 7. undefined //
      var nothingHere;
      console.log(nothingHere); // => prints undefined
      /**
       * The undefined data type signifies that no value has been put into the variable but the variable has been declared.
       */
       
       // 8. null //
       var intentionalBlank = null;
       console.log(intentionalBlank); // prints null
       /**
        * The Null data type is very similar to undefined meaning that the variable has no value added to it but with
        * null the value is usually used to intentionally add a non value.
        */
        
        // 9. NaN //
        var notANumber = 0/0;
        console.log(notANumber); // => prints NaN
        /**
         * NaN stands for 'not a number'. The NaN data type occurs when an arithmetic expression is performed but the
         * result is not an actual numerical value.
         */
         
         // 10. Infinity and -Infinity //
         var infinity0 = Infinity;
         console.log(infinity0); // prints => Infinity
         var negativeInfinity = -Infinity;
         console.log(negativeInfinity);// prints => -Infinity
         /**
          * The Infinity data type is a numerical value representing infinity.
          * The -Infinity data type is a numerical value representing negative infinity.
          */
          
          // 11. What is the difference between primitive/simple data types and complex data types //
          /**
           * Primitive/simple data types consist of: booleans, strings, numbers, undefined, null, NaN. They are
           * considered simple because that can only hold one specfic piece of data. They are also considered
           * simple because their values cannot be changed, new values are created.
           * Complex data types consist of: arrays, objects, and funntions. They are considered complex because they can
           * hold a collection of different types of data. They also reference their information so are not limited to the
           * specific eight bits of memory that simple data types are confined to. Because of this their size can be infinite
           * and their values can be altered.
           */
           
           // 12. Primitive values are passed to a function by COPY, complex values are by REFERENCE. What does that mean //
           //      and how are they different //
           /**
            * What this means is that primitive values are literally copied to the function and complex values are referencing
            * data that is stored elsewhere. The difference is that since primitive values are dealing with a fixed space of memory, the value stored in the 
            * original data is never changed and must be copied, whereas with complex data, since you are using larger bits of 
            * information, referencing must be used to access all the information.
            */
         
        

