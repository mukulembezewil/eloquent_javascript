// ♋ REST PARAMETER    `...`

/*
In JavaScript, the ... syntax is called the "rest parameter." It's used in function definitions to represent an indefinite number of arguments as an array. When you use ... before the parameter name in a function declaration, it collects all the remaining arguments passed to the function into a single array.

Note that the rest parameter must be the last parameter in the function. If there are other parameters before it, their values aren’t part of that array. When, as in max below, it is the only parameter, it will hold all arguments.

*/

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}

console.log(max(4, 1, 9, -2));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

/*
The max function is defined with ...numbers as its parameter. This means that when you call max(4, 1, 9, -2), all the numbers passed as arguments (4, 1, 9, -2) are collected into the numbers array within the function. The numbers array will look like [4, 1, 9, -2] inside the function.

Then, the function logic iterates through this array to find the maximum value by initializing result to -Infinity and comparing each number in the numbers array. Finally, it returns the maximum value found.

This use of the rest parameter ... allows the function to accept any number of arguments and process them as an array within the function body.
*/

// -Infinity

/*
In JavaScript, the expression let result = -Infinity; initializes a variable named result and assigns it the value of -Infinity.

-Infinity is a special value in JavaScript, representing the most negative number that can be represented in the language. It is used here as an initial value for finding the maximum number in a list. By setting result to -Infinity, it ensures that any number in the input list will be greater than this initial value, allowing the comparison to correctly find the maximum value from the given numbers.

The intention behind setting result to -Infinity is to ensure that any number encountered in the subsequent comparison loop will be considered larger than -Infinity. This way, the first number encountered in the array will automatically become the initial candidate for the maximum value, and subsequent comparisons will update result if a larger number is found in the array.

-2 is indeed greater than -Infinity.

In the comparison -2 > -Infinity, -2 is a finite number, whereas -Infinity represents the most negative value possible in JavaScript, essentially an infinitely negative value. Any finite number, positive or negative, will be greater than -Infinity. Therefore, -2 is greater than -Infinity in JavaScript.

This property is utilized in the max function code snippet you provided earlier, where the initial value of result is set to -Infinity. This ensures that any number encountered during the comparison loop within the function will be considered larger than the initial value of result.
*/

function squeak(m, ...args) {
	let nom = 4;
	for (let piece of args) {
		if (piece > nom) {
			console.log(piece + ' ' + 'is greater than nom');
		} else {
			console.log(piece + ' ' + 'is less than nom');
		}
	}
	return m + ' ' + 'is not part of the array.';
}

console.log(squeak(22, 3, 2, 9, 14));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ SPREAD OPERATOR    `...`

/* the rest parameter and the spread operator in JavaScript are related but serve different purposes.

The rest parameter syntax (...) is used in function declarations to represent an indefinite number of arguments as an array. It collects individual arguments into an array within a function definition.
It allows functions to accept any number of arguments and access them conveniently as an array within the function body.

Example:*/

function examplefunc(...args) {
	console.log(args);
}

examplefunc(4, 5, 'six', 'seven', 'boo');
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

/*
The spread operator, also denoted by ..., is used in various contexts (like function calls, array literals, etc.) to expand an iterable (like an array) into individual elements. It's the inverse of the rest parameter.

It allows you to spread elements of an array (or any iterable) into another array or function arguments.
Example in function calls:*/

const numbers = [1, 2, 3, 'x', 'i'];
console.log(...numbers);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// Example in array literals:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1]; // Spread operator used to concatenate array
console.log(arr2);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

/*
In summary, the rest parameter collects arguments into an array in function declarations, while the spread operator spreads elements of an array or an iterable out, allowing them to be used as individual elements or to concatenate arrays, among other uses. They are both denoted by the same syntax (...), but they are used in different contexts and serve different purposes in JavaScript.
*/

// OBJECTS & THE SPREAD (...) OPERATOR

/*
While objects themselves are not iterable by default, the spread operator can be used with certain object-related operations.

In modern JavaScript (ES6 and later), the spread operator can be used with some object-related functionalities:

Object literals (for object copying and merging):
*/

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 }; // Spread operator used to merge objects

console.log(obj2);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// In modern JavaScript, spreading an object using the {...obj} syntax to clone it or merge its properties into another object is a valid and commonly used approach e.g below.

const obj = { a: 1, b: 2, town: 'Kampala', country: 'Uganda' };
const spreadObj = { ...obj }; // This way of object copying works within an object literal or for object merging
console.log(spreadObj);

console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// You can use a similar three-dot notation to call a function with an array of arguments.
let numboz = [5, 1, 7];
console.log(max(...numboz)); // → 7
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

//  This “spreads” out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).

//  Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
let words = ['never', 'fully'];
console.log(['will', ...words, 'understand']);
