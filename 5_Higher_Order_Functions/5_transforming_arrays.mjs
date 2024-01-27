// TRANSFORMING ARRAYS WITH map();
// Like forEach and filter, map is a standard array method.

import { SCRIPTS } from './3_scripts.mjs';

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
console.log(map(rtlScripts, (s) => s.name));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let ages = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
	ages.map((age) => `Multiplied by 2 the age would be: , ${age * 2}`)
);

/*
Array.map() is a method in JS that allows you to create a new array by transforming each element of an existing array using a function. Here is a breakdown of how it works:

1. Syntax: The syntax for Array.map() is:

let newARray = array.map(callback(currentValue, index, array) {
  return element for newArray
}, thisArg);

--currentValue: The current element being processed in the array.
--index: (optional): The index of the current element being processed.
--array (optional): The array 'map' was called upon.
--thisARg (optional): A value to use as 'this' when executing the callback function.

2. Functionality: Array.map() iterates over each element of the array and applies the callback function to each element. The return value of the callback function is then added to a new array, which is returned as the result.

3. Example:*/

// Original array
let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubledNumbers = numbers.map(function (num) {
	return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/*
In this example, Array.map() is used to create a new array 'doubledNumbers where each element is twice the corresponding element in the original array.

Note that:
Array.map() does not mutate the original array. It creates and returns a new array.

You should always return a value from the callback function, otherwise, the element in the new array will be 'undefined'.

The original array remains unchanged after calling map();
*/

console.log('============================================');
let digits = [6, 7, 8, 9, 10];

let newArray = digits.map(function (currentValue, index, array) {
	console.log(
		`currentValue: ${currentValue}, index: ${index}, array: [${array}]`
	);
	return currentValue * index; // Multiply each element by its index
});

console.log(newArray);

/*
In this example:

`currentValue` represents the current element being processed.
`index` represents the index of the current element being processed.
`array` represents the array map() was called upon.

The function logs the currentValue, index, and array for each element being processed. Then, it multiplies each element by its index and returns the result.

In the resulting newArray, each element is the product of the original element and its index in the array.
*/
