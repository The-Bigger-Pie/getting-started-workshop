/* This exercise is about the five data types 
   - string
   - number
   - boolean
   - Array
   - Object

   to check the type of a variable use typeof x
   e.g.
   const x = 7;
   console.log(typeof x);
   -> number
*/


// write a function that adds to numbers together and returns the sum

function sum(a, b) {
   // console.log(typeof a);
   // console.log(typeof b);
   return a + b;
};

var addSum = sum(3, 6);

console.log(addSum);

// write a function that adds to strings together and returns one string
function concat(a, b) {
   return a.concat(' ', b);
};

var myName = concat('Lena', 'Hierzi');
console.log(myName);

// write a function that checks if two inputs are equal
// check out different levels of equality (e.g. strict equality)
// a == b  -> normal equality
// a === b -> strict equality
// a !== b
function isEqual(a, b) {
   return a === b;
};

var first = isEqual(2, 3); // -> false
var second = isEqual(2, 2); // -> true
var third = isEqual(2, '2'); // -> true or false

console.log(first);
console.log(second);
console.log(third);

// write a function that returns the 1st element out of an Array
function firstElement(array) {

};

// firstElement([1, 2, 3, 4])
// firstElement(['apple', 'peach', 'pommegranat'])

/*  write a function that returns an object including the following information
   name: string,
   githubName: string,
   id: number,     ->(can be any rondom number)


   EXTRA:
   for the name use the concat function to add your first name + last name,
   for the id use the sum function to add your favorite number to your age,
   for that the inputs for name and id would be arrays. So you would need 
   to check for the type. 
*/
function userInfo(name, githubName, id) {

}

// userInfo('Lena', 'giaghierz', 23)
// userInfo(['Lena', 'Hierzi'], 'giaghierz', [23, 29])


