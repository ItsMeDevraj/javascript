// Dates

let myDate = new  Date();

console.log(myDate.toString()); //Sat Jul 01 2023 12:15:44 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Sat Jul 01 2023

console.log(myDate.toISOString());//2023-07-01T12:15:44.739Z

console.log(myDate.toJSON());//2023-07-01T12:15:44.739Z

console.log(myDate.toLocaleDateString());// 7/1/2023

console.log(myDate.toLocaleString());// 7/1/2023, 12:15:44 PM

console.log(myDate.toLocaleTimeString());// 12:15:44 PM

console.log(myDate.toTimeString());// 12:19:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString()); // Sat, 01 Jul 2023 12:19:34 GMT


// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate);

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
});
