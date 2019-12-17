/**
 * Functions
 * 0. Functions are reusable blocks of code that can optionally take in parameters and then perform an action on those 
 * parameters and will optionally return a new value.
 */
 
 // 1. The Two phases of using functions: First we Must_? Next we can execute(or two other words for executing //
 // a function?) a function by? //
 /**
  * First we must declare the function by giving it a name, then parameters(if there are any) inside the parantheses, 
  * then comes the function body ( the action the function will perform) which is encapsulated in curly braces, and
  * then the return statement will also be in that function body. Next we can perform a function call. This is how you 
  * execute the function. The function call consists of the function name followed by parantheses.
  */
  
  // 2. What's the difference between a function's parameters and arguments passed to a function //
  
  /**
   * The difference is that when you declare your function, directly after the name will go a set of parantheses.
   * The inputs that go here are referred to as parameters. They are placeholders for the actual information
   * that will be placed here during the function call. The inputs that are used during the function call are 
   * referred to as arguments.
   */
   
   // 3. What's the syntax for a NAMED function //
    var myFunction = function named(parameter) {
        console.log('hello');  
    }
    /**
     * The syntax for a named function consists of the function name followed by parantheses. Inside these parantheses
     * go the parameters. Followed by that is the function body enclosed in curly braces which usually contains a
     * return statement.
     */
     
     // 4. How do we assign a function to a variable //
       var myFunction = function named(parameter) {
        console.log('hello');  
    }
    /**
     * We assign a function to a variable by using the assignment operator.
     */
     
     // 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs and how //
     //     do we specify outputs? //
     
     /**
      * The way we specify inputs is by passing them into the function call as arguments. The way we specify outputs is by 
      * using the return keyword inside our function code block.
      */
      
      // 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true //
      
      /**
       * Functions have access to global scopes but variables created inside functions are restricted to the function
       * scope of that body. Functions do not have access to other function's scope.
       */
       
     // 7. Closures: Functions form closures around the data they house. If an object returned from the function //
     //    and is held in the memory somewhere (referenced), that closure stays alive, and data can continue to //
     //    exist in these closures //
     /**
      * Closures are functions that have accessed a variable in the global scope. Since they have done 
      * this and are referencing the location of the data, they can keep variables alive even after the parent scope
      * has closed.
      */
     