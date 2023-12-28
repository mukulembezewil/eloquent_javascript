//  Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(range(1, 10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function numTotal(arrNum) {
	let result = 0;
	for (i = 0; i < arrNum.length; i++) {
		result = result + arrNum[i];
	}
	return result;
}

let thArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numTotal(thArr));

/* The range function could have been done as below where it calls the numTotal function

function range(start, end) {
	let arr = [];

	for (j = start; j <= end; j++) {
		arr.push(j);
	}

	return numTotal(arr);
}

function numTotal(arrNum) {
	let result = 0;
	for (i = 0; i < arrNum.length; i++) {
		result = result + arrNum[i];
	}
	return result;
}

console.log(range(1, 10));
*/

/*
modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step = 1) {
	if (step === 0) {
		throw new Error('Step cannot be zero');
	}

	let arr = [];

	// Case when step is positive
	if (step > 0) {
		for (let i = start; i < end; i += step) {
			arr.push(i);
		}
	}
	// Case when step is negative
	else {
		for (let i = start; i > end; i += step) {
			arr.push(i);
		}
		// Add the 'end' value explicitly since the loop condition is i > end
    arr.push(end); 
	}

	return arr;
}

// Testing the function calls
console.log(range(1, 10, 2)); // Output: [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // Output: [5, 4, 3, 2]
*/
