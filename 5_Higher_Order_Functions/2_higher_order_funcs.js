// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// A higher-order function is like a special kind of function that either takes other functions as inputs or gives you a new function as its output.

//  It's a concept from math, but in programming, it means we can do cool things with functions e.g.

// 🥎 1. CREATING NEW FUNCTIONS:
// You can make a function that creates new functions. Look at this one:

function greaterThan(n) {
	return (m) => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));

/* Here, greaterThan is a function that gives you a new function (m => m > n). You use greaterThan(10) to create a specific version that checks if a number is greater than 10.

⋈ Function Definition: Lines 10 - 12 
This defines a function named greaterThan that takes a parameter n. Inside this function, it returns another function that takes a parameter m and checks if m is greater than n. The inner function is what we call an arrow function.

⋈ Creating a Specific Function: Line 14
Here, we use the greaterThan function to create a new function called greaterThan10. We pass 10 as an argument to greaterThan, so greaterThan10 now specifically checks if a given number is greater than 10.

⋈ Using the New Function: Line 16
We use the greaterThan10 function to check if the number 11 is greater than 10. The result is true, so the output of console.log will be true.
*/

// 🥎 2. CHANGING FUNCTIONS:
// You can also make a function that changes other functions. Check this out:

function noisy(f) {
	return (...args) => {
		console.log('Calling with', args);
		let result = f(...args);
		console.log('Called with', args, ', returned', result);
		return result;
	};
}

noisy(Math.min)(3, 2, 1);

/*
⋈ Function Definition: Lines 33 - 40
This defines a function named 'noisy' that takes another function 'f' as a parameter. Inside this function, it returns a new function (an arrow function. This new function takes any number of arguments ('...args' is called the rest parameter, allowing the function to accept any number of arguments) and does the following:
⦿ Logs a message saying it's being called with the provided arguments.
⦿ Calls the original function f with the provided arguments and stores the result.
⦿ Logs a message showing that the function was called with the arguments and what it returned.
⦿ Finally, it returns the result of the original function.

In simpler terms, the noisy function wraps another function (f) and adds some logging around it.

⋈ Using the 'noisy' Function: Line 42
Here, we use the noisy function with Math.min as an argument. This creates a new function that behaves like Math.min, but with added logging. Then, we immediately call this new function with the arguments 3, 2, and 1.

⋈ Outputs:
When we run the code, it outputs the messages from the noisy function, showing that it was called with [3, 2, 1] and that it returned 1 (which is the result of Math.min(3, 2, 1)).

In summary, the noisy function is a way to wrap other functions, add some logging, and create a new function with the same behavior as the original function.
*/

// 🥎 3. CONTROLLING FLOW:
// You can also create functions that control how other functions run. For instance:

function unless(test, then) {
	if (!test) then();
}

function repeat(x, action) {
	for (let j = 0; j < x; j++) {
		action(j);
	}
}

repeat(3, (n) => {
	unless(n % 2 == 1, () => {
		console.log(n, 'is even');
	});
});

/*
Here, unless takes a test and a function (then). If the test fails, it runs the function. In this example, it prints if a number is even.

⋈ Function Definition: Lines 66 - 68
This defines a function named unless that takes two parameters: test and then. Inside the function, it checks if the negation (!) of the test condition is true. If it is, it calls the then function.

This assumes the existence of a function called repeat, being used to run a block of code (the one inside the curly braces) three times.

⋈ Inside the 'repeat' Block:
The block inside the repeat function is an arrow function that takes a parameter n.

Here, it uses the unless function. It checks if n % 2 == 1 (checks if n is an odd number). If it's not true, it executes the block inside the arrow function, which logs a message saying that n is even.

⋈ Assuming the repeat is correctly implemented and runs the block three times with n being 0, 1, and 2, the output will be messages for the even numbers (0 and 2). This is because the unless condition is checking if the number is not odd (i.e., it's even).

In summary, the code is using a combination of functions (unless and repeat) to log messages for even numbers within a certain range (assuming repeat is designed to repeat a block of code).
*/

let men = ['men', 'lads', 'genomen'];

men.forEach((man) => console.log(man));

/* As seen above, there is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.
 */
