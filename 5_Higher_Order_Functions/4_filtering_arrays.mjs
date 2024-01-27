import { SCRIPTS } from './3_scripts.mjs'; // This line imports a variable called 'SCRIPTS' from a module located at the relative path './3_scripts.mjs'. A module is a way to organize and encapsulate JavaScript code.

// Defining the 'filter function
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
The above function named 'filter', takes two parameters: 'array' (an array) and 'test' (a function). It iterates through each element in the 'array' and applies the 'test' function to each element. If the 'test' functions returns 'true' for a given element, that element is added to a new array called 'passed'. Finally, the 'passed' array is returned.

Calling 'filter' on 'SCRIPTS':
On line 13 the 'filter' function is called with 'SCRIPTS' as the array and an arrow function '(script) => script.living' as the test function. This arrow function checks the 'living' property of each 'script' object. If 'script.living' is truthy, it means the script is associated with a living language, and the script is included in the result.
The filtered result is then logged to the console using 'console.log'.

In summary the code filters the 'SCRIPTS' array, selecting only those objects where the 'living' property is truthy, and logs the result to the console. The 'filter' function is a generic utility function that can be reused for different filtering criteria.
/*
NOTE: Use of ES module loading.
(node:94110) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

Here since we have no package json we opted to give the relevant files extension .mjs.
*/
