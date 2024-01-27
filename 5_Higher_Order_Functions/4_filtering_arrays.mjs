import { SCRIPTS } from './3_scripts.mjs'; // This line imports a variable called 'SCRIPTS' from a module located at the relative path './3_scripts.mjs'. A module is a way to organize and encapsulate JavaScript code.

// Defining the 'filter function. Note that this is a custom function, not the array.filter() method.
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}
console.log(filter(SCRIPTS, (script) => script.living));

/* Defining the filter function
The above custom function named 'filter', takes two parameters: 'array' (an array) and 'test' (a function). It iterates through each element in the 'array' and applies the 'test' function to each element. If the 'test' function returns 'true' for a given element, that element is added to a new array called 'passed'. Finally, the 'passed' array is returned.

Calling 'filter' on 'SCRIPTS':
On line 13 the 'filter' function is called with 'SCRIPTS' as the array and an arrow function '(script) => script.living' as the test function. This arrow function checks the 'living' property of each 'script' object. If 'script.living' is truthy, it means the script is associated with a living language, and the script is included in the result.
The filtered result is then logged to the console using 'console.log'.

In summary the code filters the 'SCRIPTS' array, selecting only those objects where the 'living' property is truthy, and logs the result to the console. The 'filter' function is a generic utility function that can be reused for different filtering criteria.
/*
NOTE: Use of ES module loading.
(node:94110) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

Here since we have no package json we opted to give the relevant files extension .mjs.
*/

function reverseArray(array) {
	return array.reverse();
}

let arrBee = [1, 2, 3, 4, 5];
console.log(reverseArray(arrBee));

// let arrCee = arrBee.reverse();

// console.log(arrCee);

// console.log(arrBee.reverse());

const larche = arrBee.filter((num) => num % 2 === 0);
console.log(larche);

/* above is the use of the direct array method filter() on an array.


1. **Using the `filter` method directly on an array:**
   ```javascript
   array.filter(callbackFunction(element, index, array), thisArg)
   ```
   In this approach, you call the `filter` method directly on an array (`array`). You provide the callback function as the first argument, and optionally, the `thisArg` parameter for setting the `this` value within the callback function.

2. **Using a custom `filter` function:**
   ```javascript
   filter(array, callbackFunction)
   ```
   In this approach, you're using a custom `filter` function (`filter`) defined elsewhere in your code. This function is not a built-in method of arrays but rather a custom utility function. You pass the array as the first argument, followed by the callback function.

Both approaches achieve similar results, which is filtering an array based on a given criterion. The primary difference is that the first approach (`array.filter()`) is part of JavaScript's standard array methods, while the second approach (`filter(array, callback)`) involves a custom function.

The choice between the two approaches depends on factors such as code readability, reusability, and personal preference. Using the built-in `filter` method directly on an array is generally more idiomatic and may be more familiar to other developers. However, defining a custom `filter` function can provide more flexibility and abstraction, allowing you to customize the filtering process according to your specific requirements.
*/
