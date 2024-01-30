// USING THE array.some() HIGHER ORDER FUNCTION

import { SCRIPTS } from './3_scripts.mjs';

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));

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
