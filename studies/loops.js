/**
 * Loops
 * 0. Loops are a way to perform an action a specified number of times on a data type, usually arrays and objects.
 */
 
 // 1. Explain While, For, and For-in loops //
/**
 * While loops will loop through a block of code while a specified condition remains true. Their syntax consists of creating a
 * variable first which is usually set to zero. Then the while keyword is used followed by a set of parantheses. Within these parantheses
 * will go the conditional statement. Following the parantheses will be a set of curly braces. Within these will be the code block that runs
 * while the condition remains true. For loops will loop through a block of code a specific number of times. The for loop syntax consists of 
 * the for key word followed by a set of parantheses. First within these parantheses an 'index' variable will be created and will usually be set
 * to the value of zero and it will be followed by a semi-colon. Next goes the condition that determines when the loop will stop followed by a 
 * semi-colon. Last in the parantheses will be a counter that represents how much to increment or decrement while scanning through the array.
 * Following the parantheses will be a set of curly braces and within these go the code block that will be run on each element of the array.
 * The For-In loop will loop through an object's properties. It's syntax consists of the for keyword followed by a set of parantheses. First 
 * within these parantheses a variable will be declared as 'key'. Next comes the in keyword followed by the object that will be searched. Following
 * the parantheses is a set of curly braces and within these go the code block that will be run on each property of the object.
 */
 
 // 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //
 function range(start, end) {
    var rangeArray = [];
    if (start < end) {
    for (var i = start; i <= end; i ++) {
        rangeArray.push(i);
    } return rangeArray;
    }  else  {
        for (var i = start; i >= end; i -- ) {
            rangeArray.push(i);
        } return rangeArray;
    }
}
   console.log(range(0, 50)); // prints => 0 through 50
   console.log(range(50, 0)); // prints => 50 through 0
   
   // 3. Loop over an array forwards and backwards // 
   var myArray = ['dog', 'fish', 'cat']
   for(var i = 0; i < myArray.length; i++) {
       console.log(myArray[i]); // prints => 'dog', 'fish', 'cat'
   }
   for ( var i = myArray.length; i > 0; i --) {
       console.log(myArray[i]); // prints => 'cat', 'fish', 'dog'
   }
   
   // 4. Loop over an Object //
   var myObject = {
       key1: 'value1',
       key2: 'value2',
       key3: 'value3'
   } 
for(var key in myObject) {
    console.log(key);  // prints => key1, key2, key3
    console.log(myObject[key]); // prints => 'value1', 'value2', 'value3'
}