let score = null;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
///"33abc" => NaN
// true => 1; false => 0

let isLoggedIn =  "dev";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1  => true;  0 => false
// "" => false
// "dev" => true

let someNumber = 33;

let stringtNumber = String(someNumber);
// console.log(stringtNumber);
// console.log(typeof stringtNumber);


//****************** Operations ******************

let value =  3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);\

let  str1 = "hello";
let str2 = " dev";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // right to left conversion
// console.log(1 + "2");
// console.log("1" + 2 + 2); //first "1"+2 = "12"+2 = "122"
// console.log(1 + 2 +  "2"); //first 1+2 = 3 + "2" = "32"

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2;

let gameCounter  = 100;

let b = gameCounter++;
console.log("value of b: ", b);
console.log(gameCounter);

let a = ++gameCounter;
console.log("value of a: ", a);
console.log(gameCounter);


