// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt, NaN

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id ===  anotherId);

const bigNumber = 22333732358543943789n;



// Reference type (Non Primitive)

// 3 types: [] array, {} object, () function

const  hero = ["shaktiman", "naagraj", "doga"];

let myObj =  {
    name: "dev",
    age: 18,
    city: "delhi"
};


const myFnc = function fun(){
    console.log("Hello! Dev");
}



console.log( typeof score); // returns type number
console.log(typeof scoreValue); // returns type  number
console.log(typeof isLoggedIn);  // returns type boolean
console.log(typeof outsideTemp); // returns type object
console.log(typeof id); // returns type  symbol
console.log(typeof bigNumber); // returns type bigint


console.log(typeof hero); // returns type object
console.log(typeof myObj); // returns type object
console.log(typeof myFnc); // returns type function


console.log(Array.isArray(hero)); //To check the object is array or not