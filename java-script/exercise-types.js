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

/* To run the file, in the terminal, you have to enter this command:

   `node name-of-file.js`


   - make sure you are in the right directory in your terminal. You might have to 
      add the directory the file is in... 
      e.g. when your terminal shows you that you are at `getting-started-workshop` 
      you have to run this command:

      `node java-script/your-name.js`

      or you navigate into the directory with 

      `cd java-script`

      and here you can run this command

      `node your-name.js`
   

*/

// write a function that adds to numbers together and returns the sum

function sum(a, b) {
   // console.log(typeof a);
   // console.log(typeof b);
   return a + b;
};

// var addSum = sum(3, 6);
// console.log(addSum);

// write a function that adds to strings together and returns one string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
function concat(a, b) {

};

// var myName = concat('Lena', 'Hierzi');
// console.log(myName);

// write a function that checks if two inputs are equal
// check out different levels of equality (e.g. strict equality)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
function isEqual() {

}

// var first = isEqual(2, 3); // -> false
// var second = isEqual(2, 2); // -> true
// var third = isEqual(2, '2'); // -> true or false

// console.log(first);
// console.log(second);
// console.log(third);

// write a function that returns the 1st element out of an Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
function firstElement(array) {

}

//  console.log(firstElement([1, 2, 3, 4]));
//  console.log(firstElement(['apple', 'peach', 'pommegranat']));

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

//  console.log(userInfo('Lena', 'giaghierz', 23))
//  console.log(userInfo(['Lena', 'Hierzi'], 'giaghierz', [23, 29]))


