/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual. To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object". The Object.keys function will be useful when you need to go over the prop- erties of objects to compare them.
*/

function deepEqual(a, b) {
	if (a === b) {
		// If both values are strictly equal, return true
		return true;
	}

	if (a == null || typeof a !== 'object' || b == null || typeof b !== 'object') {
		// If either a or b is null or not an object, or if they are not equal, return false
		return false;
	}

	const keysA = Object.keys(a);
	const keysB = Object.keys(b);

	if (keysA.length !== keysB.length) {
		// If the number of keys in objects a and b are different, return false
		return false;
	}

	for (let key of keysA) {
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
			// If keys of object a are not present in object b or their values are not deeply equal, return false
			return false;
		}
	}

	// If all the checks pass, objects are deeply equal
	return true;
}

// Example usage:
const obj1 = { a: 1, b: { c: 3 } };
const obj2 = { a: 1, b: { c: 3 } };
const obj3 = { a: 1, b: { c: 4 } };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false

//  This deepEqual function compares two values and returns true only if they are strictly equal or if they are objects with the same properties and their corresponding properties are deeply equal according to the recursive call to deepEqual. It handles the special case where typeof null also produces 'object' and performs a deep comparison using recursion for objects.
