/*
    ♋ DESTRUCTURING .....

Destructuring in JavaScript is a convenient way to extract multiple values from data stored in objects or arrays. It allows you to unpack values from arrays or properties from objects into distinct variables. Here's a breakdown of how destructuring works in JavaScript:*/

// ### Object Destructuring:

const person = {
	firstName: 'Kawere',
	lastName: 'Mwami',
	age: 30,
	country: 'Uganda',
};

// Extracting values using object destructuring
const { firstName, lastName, age, country } = person;

console.log(firstName); // Output: John
console.log(age); // Output: 30

/* Explanation:
- We define an object `person` containing various properties.
- With object destructuring, we create variables (`firstName`, `lastName`, `age`, `country`) that directly extract values from the `person` object with matching property names.

### Renaming Variables while Destructuring:

You can also rename variables while destructuring:*/

const { firstName: fName, lastName: lName } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe

/*
Here, `firstName` is renamed as `fName`, and `lastName` as `lName` while destructuring.*/

// ### Default Values:

//You can set default values in case the property is undefined:

const { email = 'N/A' } = person;

console.log(email); // Output: N/A (since 'email' property doesn't exist in the 'person' object)

// ### Array Destructuring:

// Destructuring works similarly with arrays:

const numbers = [1, 2, 3, 4, 5];

const [first, second, , fourth] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

/*
- `first`, `second`, and `fourth` variables extract the values at specific indexes from the `numbers` array.
- The empty space `,` in the array destructuring skips the third value in the array.*/

// ### Nested Object Destructuring:

// Destructuring also works with nested objects:

const user = {
	id: 101,
	personalInfo: {
		name: 'Alice',
		agee: 28,
		hobbies: ['reading', 'painting'],
	},
};

const {
	personalInfo: {
		name,
		agee,
		hobbies: [hobby1, hobby2],
	},
} = user;

console.log(name); // Output: Alice
console.log(agee); // Output: 28
console.log(hobby1); // Output: reading
console.log(hobby2); // Output: painting

// ### Function Parameter Destructuring:

// Destructuring can be used with function parameters to directly extract values:

function displayPersonInfo({ firstName, lastName }) {
	console.log(`Name: ${firstName} ${lastName}`);
}

displayPersonInfo(person); // Output: Name: John Doe

/*This function `displayPersonInfo` takes an object and directly extracts `firstName` and `lastName` properties to display the person's name.
 */

let junglers = ['Cats', 'Dogs', 'Rats', 'Pigs'];

function displayJunglers([first, second, third, fourth]) {
	console.log(first, second, third, fourth);
}

displayJunglers(junglers);

/*This function `displayJunglers` takes an object and directly extracts the value in the `first`, `second`, `third` and `fourth` index positions to display the animals' name.

Destructuring in JavaScript is a powerful and handy feature that simplifies working with complex data structures, making code cleaner and more readable for developers.
 */
