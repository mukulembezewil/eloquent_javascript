/* Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

• Zero is even. 
• One is odd. 
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(n) {
	// handling negative numbers by converting them to positive
	n = Math.abs(n);

	// Base cases
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/*
This isEven function uses recursion to determine if a positive whole number is even or odd based on the rules provided:

Zero is considered even (returns true).
One is considered odd (returns false).
For any other positive number N, its evenness is determined by whether N - 2 is even.
The function first checks for the base cases of 0 and 1, then recursively calls itself by subtracting 2 from the input number until it reaches either 0 or 1, returning true or false accordingly.
*/
