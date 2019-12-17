/**
 * Variables:
 * 0. Variables are what we use to hold or reference data types for the life-cylce of the program. 
 * They are essentially named containers for data and can only hold a specific type of data at a time. 
 * Variables are called variables because they can be reassigned and the data type they hold can change as well.
 */
 
 // 1. Declaration and Assignment //
 var myVariable;
 /**
  * To declare a variable we use the var keyword followed by what we want our variable to be called using 
  * camel case syntax followed by a semicolon.
  * To initialize our variable, which means to assign it a vaule other than undefined, we use the = assignment
  * operator
  */
  console.log(myVariable); // prints => undefined
  myVariable = "Jay";
  console.log(myVariable); // prints => Jay
  
  // 2. Var, Let, Const //
  /**
   * Variables declared with keyword var have global scope which means they can be accessed throughout the program
   * as opposed to block scope which can only be accessed in a certain function block. Var variables can also be 
   * reassigned. Variables declared with the let keyword are restricted to block scope which means they can only be
   * accessed in their function body. They can also be reassigned. Variables declared with the const keyword cannont be
   * reassigned. Doing so will throw a reference error. Const variables also have block scope. Const variables cannot 
   * just be declared but need to be initialized when created.
   */
   var myVariable2 = "hippo";
   console.log(myVariable2); // => prints hippo
   let letVariable = "pottamus";
   console.log(letVariable); // => prints pottamus
   const constVariable = 'constant';
   console.log(constVariable); // => prints constant
   
   // 3. Hoisting //
   /**
    * Hoisting is an action that happens at runtime and what it does is it takes variable declarations 
    * (not initialization) and brings them to the top of their respective scope. What this means is that 
    * when the program runs, certain variables will be accessible by name before they are declared in the script.
    * Only variable names declared with the var keyword will be brought to the global scope. Variables declared with let
    * and const are technically hoisted to the top of their scope but they are still not accessible until the interpreter
    * reaches them in the code.
    */
    
    console.log(fireTruck); // => prints undefined
    var fireTruck = "red";  // => prints red
    console.log(ambulance); // => prints reference error
    let ambulance = "white"; 
    console.log(policeCar); // prints reference error
    const policeCar = "blue";