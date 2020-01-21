//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object parameter and turn it into array
// use Object.values() to access values    
function objectValues(object) {
     var theValues = Object.values(object);
        return theValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// created a stringKeys array, used for-in loop to access keys
// used .push() to add keys to my array
// use .join() to turn array into a string
function keysToString(object) {
    var stringKeys = [];
    for( var key in object) {
         stringKeys.push(key);
    }   return stringKeys.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// convert values of object into a string and add them to array
// use typeof to ensure you are only adding strings to array 
function valuesToString(object) {
    var objValues = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            objValues.push(object[key]);
        }
    }  return objValues.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: one arg
// O: 'array' if arg is an array; 'object' if arg is an object
// Edge Case: ensure object is an object with .constructor === Object
function arrayOrObject(collection) {
   if (Array.isArray(collection) === true) {
       return 'array';
   }  else if (collection.constructor === Object ) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: string of words
// O: string with first letter capitalized
// C: capitalize first letter
// E C: use .charAt(0} to access first index then .toUpperCase to capitalize then .splice(1) to 
//        add rest of string
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: a string of words
// O: first letter of all words capitalized
// c: ensure first letter of word is capital
// e c: use reg exp to find boundary of words
function capitalizeAllWords(string) {
    return string.replace(/\b\w/g, function(string){ 
        return string.toUpperCase(); 
    });
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object with a name property
// O: 'Welcome <name>!'
// C: first letter of name must be capitalized
function welcomeMessage(object) {
       return  'Welcome' + ' ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object with a name and species property
// O: '<Name> is a <Species>'
// C: first letter of name and species must be capital
function profileInfo(object) {
       return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' ' + 'is a' + ' ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object
// O: if object has a noises array property return that property if not return 'there are no noises'
// C: if there is noises array return it as string separated with spaces
function maybeNoises(object) {
       if (Array.isArray(object.noises) === true) {
            if ( object.noises.length === 0) {
                return 'there are no noises';
            }  else {
                return object.noises.join(' ');
            }
       }       return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: a string of words and a word
// O: return true if word is in string of words false if not
// E C: use .includes() method
function hasWord(string, word) {
     if (string.includes(word)) {
         return true;
     }  else {
         return false;
     }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name and an object that has a friends property that is an array
// O: modified object with name added to friends property array
function addFriend (name, object) {
      object.friends.push(name);
      return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name and an object
// O: return true if name is found in friends property of object, false otherwise
// E C: use .hasOwnProperty() and .includes()
function isFriend(name, object) {
      if (object.hasOwnProperty('friends') === false) {
          return false;
      } else if (object.friends.includes(name) === true) {
          return true;
      }  else {
          return false;
      }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name object and a friends property array
// O: an array of all the names that name isnt friends with
// E C: use includes() with for loop to scan over array for a match
function nonFriends(name, array) {
     let notFriends = [];
      for(let i = 0; i < array.length; i ++) {
         if (array[i].friends.includes(name) === false && array[i].name !== name) {
         notFriends.push(array[i].name);
      } 
      } return notFriends;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: an object, key, and a value
// O: modified object with updated key/value
// C: if key does not exist on object, it should be created
// E C: use bracket notation to add key
function updateObject(object, key, value) {
        object[key] = value;
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: an object and an array of strings
// O: modified object
// C: remove properties from object that match array of strings
// E C: use delete to remove property
function removeProperties(object, array) {
     for(var key in object) {
      for(var i = 0; i < array.length; i ++) {
         if (array[i] === key) {
             delete object[key];
         }
     }   
   }      return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: an array
// O: modified array
// C: remove any duplicate indexes of array
// E C: use .filter() and .indexOf()
function dedup(array) {
 return array.filter((a, b) => array.indexOf(a) === b);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}