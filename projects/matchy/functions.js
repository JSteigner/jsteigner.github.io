/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Input: animals array and string(name);
 * Output: one of the animals from array; null if there is no match;
 * constraints: return animal if it exists in animasl array;
 * edge case: use bracket notation
 */
 
function search(animals, name) {
   
    for (var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            return animals[i];
        } 
      }     return null;
    }



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Input: animals array, animal name, replacement name;
 * Output: replacement name
 * Constraints: if animal name matches a name in animals array replace it with replacement name;
 * Edge Case: use .splice() method to alter animals array with new name;
 */
function replace(animals, name, replacement) {
     for (var i = 0; i < animals.length; i++) {
         if (name === animals[i].name) {
             return animals.splice(animals[i], 1, replacement);
         }
     }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * input: animals array, animal name
 * output: animals array with name removed
 * constraints: if an animal name matches one in the animals array remove it;
 * edge case: use .splice() to return altered array;
 */
 
function remove(animals, name) {
    for(var i =0; i< animals.length; i++) {
        if (name === animals[i].name) {
            return animals.splice(animals[i],1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * input: animals array, animal name;
 * output: array with new animal added to it;
 * constraints: make sure animal name property has a value > 0, make sure animal species property has a value greater than 0, make sure
 * the animal name does not match any other name in animals array;
 * edge case: use .some() to check if animal name is the same as a name already in animals array;
 */
 
function add(animals, animal) {
   if(animal.species.length > 0 && animal.name.length > 0 && !animals.some((element) => (element.name === animal.name))) {
           return animals.push(animal);
           }
        }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
