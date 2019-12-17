// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

/*
* create a function that returns a contact object
* input: key values
* output: contactObject
* constraints: 
* edge case: create an object with keys and added values from parameters
* the function creates a variable object literal then adds properties with Object.defineProperties()
*/

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
       var contact = {
           id: id,
           nameFirst: nameFirst,
           nameLast: nameLast
       }; return contact;
  
} 

 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // created contacts array //
    var contact = {};
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) { // created contact function that pushes contacts to contact array //
           contacts.push(contact);
        },
   /*
    * create findContact function/property
    * input: full-name string 
    * output: contact object from contacts if true or undefined if false
    * constraints: property of makeContactList function
    * edge case: create a true boolean to return contact
   */
         findContact: function(fullName) { 
                  for( var i = 0; i < contacts.length; i ++ ) { // made for loop to scan over contacts array //
                  contact = contacts[i];
                if (fullName === contact.nameFirst + ' ' + contact.nameLast) { // if i index of contacts matches fullName return true //
                        return contact;
                }
                      return undefined;   // default undefined
         }
    },  
    /* 
    * create removeContact function/property
    * input: contact object
    * output: removes contact
    * constraints: property of makeContactList function
    * edge case: remove contact object from array with splice method
    */
        
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i ++) {
                if (contacts[i] === contact) {
                    contacts.splice(i, 1);
                }
            }
        },
    /*
    * create printAllContactNames function
    * input: contact list
    * output: return a string formatted with all the full names of the contacts seperated with a break
    * constraints: 
    * edge case: make sure last name has no new line character added to it
    */
        printAllContactNames: function() {
            let allContacts = [];  // create allContacts variable to hold all contacts
            for(let i = 0; i < contacts.length; i++) { // create for loop to scan over array contacts
                contact = contacts[i];         // set contact to contain each index of contacts array
                if (i === contacts.length-1) {  // create conditional, if the last index of contacts array
                    allContacts.push(contact.nameFirst + " " + contact.nameLast);
                }
               else { allContacts.push(contact.nameFirst + " " + contact.nameLast + "\n");
               }
               }   return allContacts.join("");
        }  
    };
}
       
        


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
