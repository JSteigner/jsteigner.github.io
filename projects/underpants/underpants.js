// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
// I: any value
// O: type of value as a string
// E C: use Array.isArray to check for array; use value === null to ensure null is not an object
_.typeOf = function(value) {
    if(Array.isArray(value) === true) {
        return 'array';
    } else if( value === null) {
        return 'null';
    }
    return typeof value;
};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// I: array, number
// O: empty array if array is not an array; first element if num is not a number; otherwise first 'number' of element
// E C: ensure num isnt negative and num is less than array length
_.first = function(array, num){
    let arrayResult = [];
    if (isNaN(num) === true) {
        return array[0];
    } else if (num < 0) {
        return arrayResult;
    } else if(Array.isArray(array) === false) {
        return arrayResult;
    } else if( num > array.length) {
        return array;
    } for(let i = 0; i < num; i++) {
            arrayResult.push(array[i]);
        }  return arrayResult;
};   
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// I: array, num
// O: empty array if array is not an array; last element in array if num is not a number; 
//    otherwise last number of items of array
// E C: ensure num is not negative; ensure num is not greater than array length;
_.last = function(array, num) {
    let arrResult = [];
    if(Array.isArray(array) === false) {
        return arrResult;
    } else if (isNaN(num) === true) {
        return array[array.length - 1];
    } else if ( num < 0) {
        return arrResult;
    } else if( num > array.length) {
        return array;
    }  for(let i = num; i > 0; i--) {
        arrResult.push(array[i]);
    }   arrResult.sort();
    return arrResult;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// I: array, value
// O: index of array that contains first occurence of value; -1 if value is not in array
// C: do not use .indexof()
_.indexOf = function(array, value) {
     for(let i = 0; i < array.length; i++) {
         if(array[i] === value) {
             return i;
         } 
     } return -1;
};
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// I: array, value
// O: true if array contains value; false otherwise
// C: use ternary operator
_.contains = function(array, value) {
    return array.includes(value) ? true : false;
};
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
// I: collection, function
// O: modified collection
// C: if collection is an array, call function parameter once for each element with the args: the element, it's index, collection
//    if collection is an object, call function parameter once for each property with the args: prop value, key, collection
_.each = function(collection, test) {
     if(Array.isArray(collection) === true) {
         for (let i = 0; i < collection.length; i ++) {
             test(collection[i], i, collection);
         }
     } else if(typeof collection === 'object' &&  collection !== null) {
              for(let key in collection) {
                  test(collection[key], key,  collection);
              } 
         }
};
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// I: array
// O: new array
// C: new array should have duplicates removed
// E C: use _.indexOf()
_.unique = function(array){
   return array.filter(function(a, b){
     return array.indexOf(a) === b;
   }); 
};
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// I: array; function
// O: new array
// C: call function on each element; new array should contain elements that returned true
_.filter = function(array, test) {
      var myArray = [];
     _.each(array, function(element, index, array){
         if(test(element, index, array)){
             myArray.push(element);
         }
     });
     return myArray;
 };
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// I: array; function
// O:  new array 
// C: call funtion on every element; new array should contain elements that returned false
_.reject = function(array, test) {
    let newArray = [];
    _.filter(array, function(element, index, array) {
        if(!test(element, index, array)) {
            newArray.push(element);
        }
    }); return newArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// I: array; function
// O: an array
// C: call function on each element in array; save truthy elements in one array and save falsey ones in another
// E C: output array will be an array of arrays
_.partition = function(array, test) {
    let newArray = [];
    if(_.filter(array, test)) {
            newArray.push(_.filter(array, test));
            newArray.push(_.reject(array, test));
        } return newArray;
    };

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// I: collection; function
// O: new array
// C: call function for each element in array; save the value in a new array and return the new array
// E C: should work for arrays or objects
_.map = function(collection, test) {
    let newArray = [];
    _.each(collection, function(value, index, collection) {
        newArray.push(test(value, index, collection));
    });
    return newArray;
};
         

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// I: array of objects; a property
// O: array of property value for every element in array
// C: use _.map()
_.pluck = function(array, prop){
   return _.map(array, function(value, index, array) {
       return value[prop];
   });
};
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// I: collection; function
// O: boolean
// C: return true if calling function on every element in array returns true; return false if one of them returns false;
//    if function is not provided, return true if every element is truthy, otherwise return false
// E C: compensate for function not returning boolean or if no function is given
_.every = function(collection, test) {
       var falseArray = [];
     _.each(collection,function(element, index, collection){
       if(typeof test !== "function"){        //check typeof 'function' to ensure it is a function
          if(!element){                     //checking to see if the element is false
              falseArray.push(element);}          //push false elements into new array
     } else if(!test(element, index, collection)){
              falseArray.push(element);            //push false elements into new array
        }
    }); if(falseArray.length > 0){           // is there anything in the false array
        return false;
    }
         return true;
};
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// I: collection; function
// O: a boolean
// C: return true if calling function on at least one element in collection returns true; false if all elements return false;
//    if no function is provided return true if at least one element is truthy, otherwise return false
// E C: compensate for function not returning boolean or if function is not given
_.some = function(collection, test) {
     let trueArray = [];
    _.each(collection, function(value, index, collection) {
         if(typeof test !== 'function') {
             if (value) {
                trueArray.push(value);
             }
         } else if (test(value, index, collection)) {
             trueArray.push(value);
         }
    });
         // is there anything in the array
    if(trueArray.length > 0){
        return true;
    }
        return false;
};
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// I: array, function, seed
// O: return value of final function call
// C: seed must be previous result on first iteration; return value of function for next iteration
// E C: if no seed is given use first element/value of array
_.reduce = function(array, test, seed) { 
        let i;
        let previousResult;
        if(seed !== undefined && seed !== null) {
            i = 0;
            previousResult = seed;
        } else {
            previousResult = array[0];
            i = 1;
        }
         for(; i < array.length; i++) {  // loop over array
             previousResult = test(previousResult, array[i], i);
         }
         return previousResult;
};
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// I: at least 2 objects
// O: updated object
// C: copy properties from object 2 to object 1
// E C: if there are more objects passed in, copy their props to object 1 as well, in the order they are passed in
_.extend = function(obj1, obj2, ...theArgs) {
       Object.assign(obj1, obj2);
       Object.assign(obj1, ...theArgs);
       return obj1;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
