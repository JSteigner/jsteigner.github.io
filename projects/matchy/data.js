/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * created an object literal assigned a variable animal;
 * added a species key to animal with a value of 'dog' using dot notation;
 * added a name key to animal with a value of 'gonzo' using bracket notation;
 * added a noises key to animal using dot notation then assigned it to an array;
 * ran console.log on animal
 */

var animal = {};
animal.species ='dog'; 
animal['name'] = 'gonzo';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * created a variable named noises and assigned it to an empty array;
 * assigned noises array an element of 'bark' at its first index;
 * assigned a value of 'woof' to the last index of noises array;
 * added a value of 'meep' to beginning of noises array;
 * used .push() to add 'squeak' to end of noises array;
 * used noises.length to console.log length of array;
 * accessed value of last index of noises array with bracket notation around noises.length - 1;
 * printed noises to console;
 */
 
var noises = [];
noises[0] = 'bark';
noises[noises.length] = 'woof';
noises.unshift('meep');
noises.push('squeak');
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * added a noises property to animal using bracket notation;
 * used .push with dot notation to add 'squeak' to noises property in animal
 * printed animal to console
 */
 
animal['noises'] = noises;
animal.noises.push('squeak');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can use dot notation and bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 * You can use bracket notaion.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * created an animals variable and assigned it to empty array;
 * used .push() to assign animal to animals array;
 * printed animals to console;
 * create a duck object and assign it key/value pairs provided;
 * used .push() to add duck to animals array;
 * printed to console animals;
 * created two more objects(cat, bird) with key/value pairs;
 * printed to console animals and the length of animals;
 */
 
 var animals = [];
 animals.push(animal);
 console.log(animals);
 var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
 animals.push(duck);
 console.log(animals);
 var cat = { 
     species: 'feline', 
     name: 'monk', 
     noises: ['meow', 'purr', 'sneeze', 'woosh'] };
     animals.push(cat);
 var bird = { 
     species: 'bird',
     name: 'tweety', 
     noises: ['quack', 'honk', 'sneeze', 'woosh'] };
 animals.push(bird);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * created a variable friends and assigned it to an empty array;
 * ceated a 'getRandomInt' function that will find a random integer;
 * Wrote a function called 'getRandom' that takes our `animals` array and returns the `index` of a random element using `Math.random`
 * used 'getRandomInt' within 'getRandom'
 * used .push() with 'getRandom' function to find a random animal from array then used .name to access the name and then push the name;
 * print friends to console;
 * used 'getRandom' on animals to find a random animal, followed by .friends to add as a friends property and then assigned that to 'friends';
 * printed work to console;
 */
 
var friends = [];
// I chose an array to make a list of friends because it can hold a collection.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandom(animals){
    return animals[getRandomInt(animals.length -1)];
}
friends.push(getRandom(animals).name);
console.log(friends);
getRandom(animals).friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
