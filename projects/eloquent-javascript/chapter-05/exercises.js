// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// I: an array of arrays
// O: a single array
// C: new array should contain all original elements of other arrays
// E C: use reduce method along with concat
function flatten(array) {
      return array.reduce((newArray, current) => newArray.concat(current), []);
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// I: a value, a test function, an update function, a body function
// O: updated value
function loop(start, test, update, body) {
      for( let value = start; test(value); value = update(value)) {
        body(value);
      }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// I: an array, a predicate function
// O: a boolean based on argument supplied for predicate
function every(array, test) {
       for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// I: a string of text
// O: the dominant writing direction found in the text
// E C: use countBy function and characterScript function 
function dominantDirection(text) {
     let counted = countBy(text, char => {
     let script = characterScript(char.codePointAt(0));
     return script ? script.direction : 'none';
     }).filter(({name}) => name!= 'none')
     
     if (counted.length === 0) {
       return 'ltr';
     }  return counted.reduce(( a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
