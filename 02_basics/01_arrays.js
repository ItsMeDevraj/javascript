// array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]);

// Array methods

// myArr.push(6); // insert element to end
// myArr.push(7);
// myArr.pop(); // Remove element from end

// myArr.unshift(9);//insert element at start
// myArr.shift(); //remove element from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join();

// .join() Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(typeof myArr);
// console.log(typeof newArr);

console.log(myArr.slice(1, 4));
console.log(myArr);
// slice doesn not manipulate the original array.
// it returns the chunk of array from the given index A to Index B-1. it  does not maipulate the original array. or just returns a copy of that specific part

console.log(myArr.splice(1,4));
console.log(myArr);

// splice manipulate the original array
// it removes element from index A to index B from the original array and returns  the  removed  part