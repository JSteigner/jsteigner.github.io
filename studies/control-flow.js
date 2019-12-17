/**
 * Control Flow
 * 0. The control flow is the way in which the computer will interpret the code. Thgis flow can be controlled
 * by using conditional statments.
 */
 
 // 1. If //
 var x = 4;
 var y = 8;
 if (y > x) {
     console.log(true); // prints => true
 }
 
 /**
  * The If keyword followed by parentheses signifies that if whatever condition inside the parantheses evaluates to true
  * then the code block encapsulated in curly braces immediately following will run.
  */
  
  // 2. Else-if //
  if (y < x) {
      console.log('nope');
  } else if ( y > x) {
      console.log(true); // prints => true
  }
  
  /**
   * The else- if statement introduces another possiblity. If the first if statement resolves to false then the 
   * computer will move on to check if the else-if statement will evaluate to true. If so then the code block that 
   * follows will run
   */
   
   // 3. Else  //
    if (y < x) {
      console.log('nope');
  } else if ( y > 15) {
      console.log(true); 
  } else {
      console.log('default condition reached'); // prints => default condition reached
  }
  
  /**
   * The Else statement provides a default condition that will run if all the other preceding conditions did not
   * evaluate to true.
   */
   
   // 4. Switch //
   var placeHolder = 'kiwi';
   switch (placeHolder) {
       case 'dates':
           console.log('these are good');
           break;
        case 'kiwi':
            console.log('I like these too!'); // prints => I like these too!
            break;
        default: 
        console.log('this is the default');
   }
   /**
    * The switch statement is similar to an if else statment in that it will go check though different dofe blocks until it 
    * finds the matching case. Once this happens it will execute the code block with in that case.
    */