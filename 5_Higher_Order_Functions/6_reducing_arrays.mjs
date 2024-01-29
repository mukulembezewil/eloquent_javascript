// SUMMARIZING ARRAYS WITH reduce()

/* reduce() builds a value by repeatedly taking a single element form the array and combining it with the current value. */
import { SCRIPTS } from './3_scripts.mjs';

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let howAbout = [5, 6, 7];

// The standard array method reduce() that corresponds to the custom function above goes like:
console.log(howAbout.reduce((a, b) => a + b));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// Note that in the standard array method reduce(), if your array contains at least one element, you are allowed to leave off the `start` argument. The method will take the first element of the array as its 'start' value and start reducing at the second element.

// To use reduce (twice) to find the script with the most characters, we can write something like this:

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

console.log(
	SCRIPTS.reduce((a, b) => {
		return characterCount(a) < characterCount(b) ? b : a;
	})
);

// The characterCount function reduces the ranges assigned to a script by sum- ming their sizes. Note the use of destructuring in the parameter list of the reducer function. The second call to reduce then uses this to find the largest script by repeatedly comparing two scripts and returning the larger one.

/*
~~ 🔯 The Array.reduce() method~~

The Array.prototype.reduce() method in JavaScript is a powerful tool for working with arrays. It allows you to perform a CUMULATIVE OPERATION on all elements of an array, reducing them to a single value. Let's break down how it works:

⌚ Syntax:

    ~~ array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]) ~~

⌖ callback: A function that will be called for each element in the array.

  Parameters:
    ⌖ accumulator: Accumulates the callback's return values. It's the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
    
    ⌖ currentValue: The current element being processed in the array.
    ⌖ index (Optional): The index of the current element being processed.
    ⌖ array (Optional): The array reduce was called upon.
  
    Returns: The accumulated value.
  
    ⌖ initialValue (Optional): A value to use as the first argument to the first call of the callback function. If no initialValue is supplied, the first element in the array will be used as the initial value.

⌚ How it works:

1. Initialization: If an "initialValue" is provided, 'accumulator' will be initialized to that value. Otherwise, 'accumulator' will be initialized to the first element of the array, and the callback will start from the second element.

2. Iteration: The callback function is called once for each element in the array, except for the first if no 'initialValue' is provided. The 'accumulator' and 'currentValue' parameters are updated on each iteration.

3. Accumulation: The return value of the callback function becomes the new value of 'accumulator'. This process continues for each element of the array.

4. Final Value: The final value of 'accumulator' after the last iteration is completed is returned as the result of the reduce() method.

⌚ Example:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)


In the above example, we use reduce to calculate the sum of all elements in the numbers array. We initialize the accumulator with 0 and add each currentValue to it in each iteration.

⌚ Key Points:


⌖ reduce() is versatile and can be used to perform various operations on arrays, including summing, averaging, filtering, or even transforming elements.

⌖ It's important to handle empty arrays or cases where no initialValue is provided to avoid errors.

⌖ The callback function should be pure (i.e., produce the same output for the same input every time) to ensure predictable behavior.

That's a basic overview of the reduce method in JavaScript! It's a fundamental tool in functional programming and can greatly simplify complex array operations.

*/
