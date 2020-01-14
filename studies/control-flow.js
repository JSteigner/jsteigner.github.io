/**
 * Control Flow
 * 0. The control flow is the way in which the computer will interpret the code. This flow can be controlled
 * by using conditional statements.
 */
 
 // 1. If //
 var x = 4;
 var y = 8;
 if (y > x) {
     console.log(true); // prints => true
 }
 
 /**
  * The If keyword followed by parentheses signifies that if whatever condition inside the parantheses evaluates to true
  * then the code block encapsulated in curly braces immediately following will run. There can be only one If statement per 
  * control flow chain.
  */
  
  // 2. Else-if //
  if (y < x) {
      console.log('nope');
  } else if ( y > x) {
      console.log(true); // prints => true
  }
  
  /**
   * The else-if statement introduces the next possiblity. If the first If statement resolves to false then the 
   * computer will move on to check if the next else-if statement will evaluate to true. If so then the code block that 
   * follows will run. The else-if keyword followed by a set of parantheses siginifies that if whatever condition inside those parantheses
   * evaluates to true then the code block encapsulated in curly braces which immediately follow will run. There can be an indefinite 
   * number of else-if conditional statements in one control flow chain.
   * 
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
   * The Else statement provides a default condition that will run if all the other preceding if, else-if conditions did not
   * evaluate to true. The syntax for this statement consists of the else keyword followed by a set of curly braces. Inside of these 
   * braces go the final code block for the control flow chain and there can be only one per chain because it is the default statement.
   * There is no need for a conditional statement because this is the default.
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
    * The syntax for the switch statement consists of the keyword switch followed by a set of parantheses. Within these parantheses
    * goes the base expression which is used to look for a matching case expression. Following the switch parantheses will go a set of
    * curly braces. Inside these braces go the case keyword followed by a string and a colon. The case string is what the switch statement is
    * trying to match with. Following the colon will go the code block that will be run if the match occurs. At the bottom of this code block goes a 
    * break statement which lets the computer know to break out of the switch function when a match occurs.
    * The switch statement is similar to an if else statement in that it will go check through different cases until it 
    * finds the matching case. Once this happens it will execute the code block within that case. The last case statement will be followed
    * by a default statement which will run if no matches are found. The default statement syntax is like the case syntax but there
    * will be no string word following the default statement or a break statment. Switch statements are better to use than else-if
    * statements when you will be dealing with a lot of else-if conditionals. The switch statement will produce cleaner code.
    */