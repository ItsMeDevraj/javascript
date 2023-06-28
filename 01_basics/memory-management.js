//types of Memory: Stack, Heap

// 1. Stack for (Primitive)
/*
    All the primitive type will be stored in Stack Memory
*/

// 2. Heap for (Non-Primitive)


// Primitive Examples:

let userName = "anon";

let anotherName = userName;
anotherName =  "chacha"

console.log(userName);
console.log(anotherName);

let userOne = {
    name: "dev",
    age: 18,
    emailid: "dd@dd.com",
    upi: "user@ybl"

};

let userTwo = userOne;


