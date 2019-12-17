/**
 * Loops
 * 0. Loops are a way to perform an action a specified number of times on a data type, usually arrays and objects.
 */
 
 // 1. Explain While, For, and For-in loops //
/**
 * While loops will loop through a block of code while a specified condition remains true.
 * For loops will loop through a block of code a specific number of times.
 * The For-In loop will loop through an object's properties.
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
    console.log(myObject[key]); prints => 'value1', 'value2', 'value3'
}