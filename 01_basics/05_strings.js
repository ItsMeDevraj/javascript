const name = "dev";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);

const gameName = new String('devdd'); // 2nd way of string creation

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('v'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString =  gameName.slice(-5, 3);
console.log(anotherString);

const newStringOne = " devdd  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devdd.com/dev%20dixit";
console.log(url.replace('%20', '-'));

console.log(url.includes('dev'));

const names = "Dev-Raj-Prithivi";
console.log(names.split('-'));
