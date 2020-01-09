// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jsteigner')
 /*    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// using the filter function, find the male number of customers
// I: array
// O: number
// C: use filter function
var maleCount = function(array) {
    let arrayOfMales = _.filter(array, function(customerObject, i, a) {
     return customerObject.gender === "male";
    });
    return arrayOfMales.length;
};
// I: array
// O: number
// C: use reduce funtion
var femaleCount = function(array){
    return _.reduce(array, function(seed, currentObj, i){
        if(currentObj.gender === 'female'){
            return seed = seed + 1;
        }
        return seed;
    }, 0);
};
// I: array
// O: string
// find the oldest customer's name
  var oldestCustomer = function(array){
   var age = _.reduce(array, function(prev, curr, index){
        if (prev.age < curr.age){
            return curr;
        } 
        return prev;
    },); 
    return age.name;
};
// I: array
// O: string
// find the youngest customer's name
var youngestCustomer = function(array){
     var age = _.reduce(array, function(prev, curr, index){
        if (prev.age > curr.age){
            return curr;
        } 
        return prev;
    },); 
    return age.name;
};
// I: array
// O: number
// find the average balance of all customers
var averageBalance = function(array){
          let avgBalances = array.map(customerObj => customerObj.balance);
          let trimmedBal = avgBalances.map(balStr => Number(balStr.replace(',', '').replace('$', '')));
          let totalBal = trimmedBal.reduce((seedTotal, num) => seedTotal + num);
          let finalBal = totalBal / trimmedBal.length;
          return finalBal;
};
   
// I: array; string of a single letter
// O: number
// E C: use .toLowerCase to compensate for capitalization
// number should equal how many names in array start with input letter
var firstLetterCount = function(array, firstLetter){
     let firstNames = _.filter(array, function(element, i){
         return element.name[0].toLowerCase() === firstLetter.toLowerCase();
     });
     return firstNames.length;
};
// I: array; customer; letter
// O: Number
// return the number of friends that customer has that start with input letter
var friendFirstLetterCount = function(array,customer,letter){
    let custFriends = {};
    for(var i = 0; i < array.length; i++){ //loop through array
   if(array[i].name === customer){    // if element name matches customer then add the object to custFriends object.
       custFriends = array[i];
   }
    }
   return _.reduce(custFriends.friends, function(prev,curr,i){ // use reduce on custFriends.friends array property
        if(curr.name[0].toLowerCase() === letter.toLowerCase()){  // if first index of current element name property value equaals the input letter...
            prev = prev + 1;  // if conditional is true then add 1 to previous value
        }
        return prev;
    },0);  // seed equal zero, this is the starting value
};
// I: array; name
// O: array
// return an array of names that have input name on their friends' lists
var friendsCount = function(array, name){
     let friendsArr = [];
     let countFriends = _.reduce(array, function(seed, element, index){
         for(let i = 0; i < element.friends.length; i ++) {
             if(name === element.friends[i].name){
                 seed = element.name;
                 friendsArr.push(seed);
             }
         } 
     }, 0); return friendsArr;
};
// I: array
// O: array
// return an array of the three most common tags of all customers associated tags
var topThreeTags = function(array){
   var tagCount = _.reduce(array, (acc, custObj) => {
        _.each(custObj.tags, function(tag){
            if(acc[tag] === undefined){
                acc[tag] = 1;
            } else{
                acc[tag]++;
            }
        });
        return acc;
    }, {});
   var arrayofKeys = Object.keys(tagCount);
   var sortedArr = arrayofKeys.sort(function (a, b){
       return tagCount[b] - tagCount[a];
   }).slice(0,3);
return sortedArr;
};
// I: array
// O: object
// C: use reduce
// create an object summary of genders 
var genderCount = function(array){
     let genderObj = _.reduce(array, function(acc, current, i){
           if(current.gender === 'female'){  // if current element property 'gender' value equals female...
               acc.female ++;       // then add 1 to acc.female property
           } else if(current.gender === 'male'){
               acc.male ++;
           } else if(current.gender === 'non-binary'){
               acc['non-binary'] ++;
           } return acc;
     }, {female: 0,  // set up seed to equal an object with these key/value pairs
         male: 0,
         'non-binary': 0
     }); 
     return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
