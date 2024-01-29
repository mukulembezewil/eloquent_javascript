// SUMMARIZING ARRAYS WITH reduce()

/* reduce() builds a value by repeatedly taking a single element form the array and combining it with the current value. */

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
