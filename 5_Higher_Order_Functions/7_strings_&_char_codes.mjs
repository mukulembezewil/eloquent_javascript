// USING THE array.some() HIGHER ORDER FUNCTION

/*
'Array.some()' is a method in JS used to check if at least one element in an array satisfies a provided condition. 

Syntax:
~~array.some(callback(element, index, array), thisArg)

Parameters:
callback: A function that will be called for each element in the array. It takes three arguments:
-> element: The current element being processed in the array.
-> index: (optional) The index of the current element being processed.
-> array: (optional): The array 'some()' was called upon.
-> thisArg: (optional) An object to which the 'this' keyword refers inside the 'callback' function.

Return Value:
  It returns 'true' if at least one element in the array passes the test implemented by the provided function. Otherwise, it returns 'false'.
  
Behavior:
  It executes the 'callback' function once for each element present in the array until it finds one where 'callback' returns a truthy value. If such an element is found, 'some' immediately returns 'true'. Otherwise, it returns 'false' after checking all elements.
  It does not mutate the array on which it is called.

Example:
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((number) => number % 2 === 0);
  console.log(hasEven); // Output: true

In this example, some is used to check if there are any even numbers in the numbers array. Since at least one element (2) satisfies the condition (i.e., being even), some returns true.

*/

import { SCRIPTS } from './3_scripts.mjs';

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code <= to;
			})
		) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));

/* INTERPRETING THE CODE SNIPPET ABOVE

[IMPORTING SCRIPTS]
LINE 33 imports a collection of scripts from a module file named 3_scripts.mjs. The SCRIPTS variable holds an array of objects, each representing a script used for writing languages.

[DEFINING THE FUNCTION]
LINE 35: defines a function named characterScript, which takes a single parameter 'code'.

[LOOPING THROUGH SCRIPTS]
LINE 36: This loop iterates over each script object in the SCRIPTS array.

[CHECKING CODE RANGE]
LINE 37 -41: Inside the loop, it checks if the code falls within the range of characters associated with the current script. It does this by using the some() method on the ranges array of the script. The some() method checks if at least one range in the ranges array satisfies the condition provided by the callback function. The callback function checks if the code is greater than or equal to 'from' and less than or equal to 'to'.

[RETURNING THE Script]
LINE 41-43: If the code is found within the range of the current script, the function returns that script object.

[RETURNING null IF NOT FOUND]
LINE 45: If no script is found that matches the code, the function returns null.

[CALLING THE FUNCTION]
LINE 48: Finally, the function characterScript is called with the code value 121, and the result is printed to the console. This line will output the script object that corresponds to the character with the Unicode value 121.

[SUMMARY]
In summary, this code is a function that determines the script (writing system) of a given character based on its Unicode value by iterating through a collection of scripts and checking if the Unicode value falls within any of their defined ranges. If a match is found, it returns the corresponding script object; otherwise, it returns null.
*/
console.log('***************************************');

function characterSscript(code) {
	for (let script of SCRIPTS) {
		const index = script.ranges.findIndex(([from, to]) => {
			return code >= from && code < to;
		});

		if (index !== -1) {
			return index; // Return the index if a match is found
		}
	}
	return -1; // Return -1 if no match is found
}

console.log(
	'The exact range where Unicode value 121 falls is at index position: ',
	characterSscript(121)
);

/* ON THE Array.findIndex() METHOD

Yes, `findIndex()` is a standard JavaScript array method available in modern JavaScript environments, including browsers and Node.js. It's used to find the index of the first element in an array that satisfies a provided testing function. Here's a brief overview:

1. **Syntax**:
   ```javascript
   array.findIndex(callback(element, index, array), thisArg)
   ```

2. **Parameters**:
   - `callback`: A function that will be called for each element in the array until it finds one where the callback returns a truthy value. It takes three arguments:
     - `element`: The current element being processed in the array.
     - `index` (Optional): The index of the current element being processed.
     - `array` (Optional): The array `findIndex` was called upon.
   - `thisArg` (Optional): An object to which the `this` keyword refers inside the `callback` function.

3. **Return Value**:
   - It returns the index of the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, it returns `-1`.

4. **Behavior**:
   - It iterates over each element in the array and applies the callback function to each element until a truthy value is returned.
   - It does not mutate the array on which it is called.

5. **Example**:
   ```javascript
   const array = [5, 12, 8, 130, 44];

   const index = array.findIndex(element => element > 10);
   console.log(index); // Output: 1 (the index of the first element greater than 10)
   ```

In this example, `findIndex()` is used to find the index of the first element in the `array` that is greater than `10`. Since `12` is the first element that satisfies the condition, `findIndex()` returns `1`, which is the index of `12` in the array.
*/
