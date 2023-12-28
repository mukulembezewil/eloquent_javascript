/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version of nth.
*/

// Function to create a list structure from an array
function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}

// Function to convert a list to an array
function listToArray(list) {
	let array = [];
	while (list !== null) {
		array.push(list.value);
		list = list.rest;
	}
	return array;
}

// Function to add an element to the front of a list
function prepend(element, list) {
	return { value: element, rest: list };
}

// Function to retrieve the element at a given position in the list
function nth(list, index) {
	if (!list) return undefined;
	return index === 0 ? list.value : nth(list.rest, index - 1);
}

// Recursive version of nth function
function recursiveNth(list, index, currentIndex = 0) {
	if (!list) return undefined;
	return index === currentIndex
		? list.value
		: recursiveNth(list.rest, index, currentIndex + 1);
}

// Example usage:
const myList = arrayToList([1, 2, 3]);
console.log(myList); // Output: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

const myArray = listToArray(myList);
console.log(myArray); // Output: [1, 2, 3]

const newList = prepend(0, myList);
console.log(newList); // Output: { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }

console.log(nth(myList, 1)); // Output: 2
console.log(recursiveNth(myList, 2)); // Output: 3
console.log(nth(myList, 5)); // Output: undefined
// These functions allow you to convert arrays to lists, lists to arrays, add elements to the front of a list, and retrieve elements from a specific position within the list.
