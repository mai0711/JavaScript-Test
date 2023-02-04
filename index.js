// Javascript Test
// Just a quick test to test your javascript understanding.

// 1- What is ES6?
ES6 stands for ECMAScript 6. 
ES6 allows us to write the code which is more readable.
Several key features are added such as let and const, arrow functions, promise, template literals, destructuring, map filter, and so on by ES6.


// 2- Name 3 examples of ES6 features which you learnt.
ES6 features are arrow function, promises and destructuring.


// 3- What is the difference between let and const?
let allows us to reassign the value once we have already assigned.
const does not allow us to reassign the value.


// 4- How do you access object values? Give 3 examples
We can access object values using dot notation, bracket notation and variable key. 


// 5- What does setInterval and setTimeout do?
setInterval runs continually until it is either cleared or window is closed.
setTimeout runs after a specific time that we set.


// What will be the output of the following ?
// FIRST
//  for (var i = 0 ; i < 5 ; i++) {
//        setTimeout(() => {
//        console.log(i);
// }, 0);
// }
5 
5
5
5
5


// SECOND
//  for (let i = 0 ; i < 5 ; i++) {
//        setTimeout(() => {
//        console.log(i);
// }, 0);
// }
0
1
2
3
4


// 6- What are promises?
promises is an object. It is used to find out wheter or not the asynchronous operation is successfully completed.
promises have three states. pending which means waiting for response, fulfilled which means success and rejected which means error.


// 7- Convert this async function to async/await
// getQuote().then((quote) => {
//   console.log(quote);
// }).catch(function(err) {
//   console.log(err);
// });
// // after this line,
async function quote() {
    try {
        let quote = await getQuote();
        console.log(quote);
    }catch(err) {
        console.log(err);
    }
}


// 8- Convert this code to arrow function.
// function greeting(firstname, lastname) {
//   return `Hello ${firstname} ${lastname}`;
// }
// // after this line,
let greeting = (firstname, lastname)=> {
    return `Hello ${firstname} ${lastname}`;
}


// 9- Explain what a callback function is.
callback function is a function that is passed into another function and then called inside that function.


// 10- What does the functions pop and push do to an array? And what do they return ?
pop removes an element from the end of an array and returns that item.
push adds one or more elements to the end of an array and returns the new length.


// 11- What is the expected answer to this code?
// let string = "";
// let object = { a: 1, b: 2, c: 3 };
// for (let key in object) {
//   string += object[key];
// }
// console.log(string);
123


// 12- What data type would Array.map() and Array.filter() return?
Array.map() returns a new array with the modified values or adding changes to the existing array.
Array.filter() returns a new array of the elements of the original array without changing the original values.


// Additionally what will be the output of this ?
// let array = [1,2,3, 0, 4,10, 0];
// let output = array.filter((item) => item); 
[1,2,3,4,10]


// 13- What data type would Array.includes() and Array.some() return?
Array.includes() returns true if at least one element in the array is equal to the value.
Array.some() return true if the array contains some element which matches the conditions we wrote.


// 14- Write down the 4 main methods of rest api
Main methods are GET, POST, PUT and DELETE.


// 15- What is the difference between JSON and a JavaScript object?
JSON key and value pair need to be surronded by double quote.
JSON cannot contain functions.
JSON can be created and used by other programming languages.

JavaScript object can remove double quote of key and value pair.
JavaScript object can contain functions.
JavaScript object can only be used in JavaScript.


// 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.
// https://www.boredapi.com/api/activity
// The above API returns what to do when you are bored.
fetch('https://www.boredapi.com/api/activity')
    .then(res =>{
        console.log(res);
        return res.json();
    }).catch(e => {
        console.log(e);
    })

let fetchTryAndCatch = async () => {
    try {
        let res = await fetch('https://www.boredapi.com/api/activity');
        let response = await res.json();
        console.log(response);
    }catch(e) {
        console.log(e);
    }
}