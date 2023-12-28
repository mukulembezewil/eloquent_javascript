// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// reverseArray Function:
// This function takes an array as an argument and produces a new array that has the same elements in reverse order.

function reverseArray(arr) {
	let reversed = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// reverseArrayInPlace Function:
// This function modifies the given array by reversing its elements in place.

function reverseArrayInPlace(arr) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

// Example usage:
let arrayToReverse = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayToReverse);
console.log(arrayToReverse); // Output: [5, 4, 3, 2, 1]
