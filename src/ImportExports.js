//file1.js
const firstName = 'Bharat';
const lastName = 'Rele';

const person = {
    firstname: 'bharat',
    lastname: 'rele'
}

export { person };

export default {firstName, lastName};

//And import them in another file with a 
// relative path to the first file.
//file2.js
// import { firstName, lastName } from './file1.js'

//import all exported variables from another file as one object.
// import * as person from './file1.js';
// console.log(person.firstName);

// Imports can have an alias.
// file2.js
// import { firstname as foo } from './file1.js';
// console.log(foo);
// output: bharat
