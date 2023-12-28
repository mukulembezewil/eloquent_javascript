// DATA SETS

/*  To work with chunks or collections of digital data, we first need to have a   way to represent it in our machine's memory. 

JavaScript provides a data type specifically for storing sequences of values. It is called an array.

*/

//  ARRAYS;

/* To Create an Array */
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
console.log('______________________________\n');

/* To access a specific element or item in an array use ARRAY[index]*/
console.log(listOfNumbers[0]);
console.log('______________________________\n');

/* To access the array member in the position before index position 2 */
console.log(listOfNumbers[2 - 1]);
console.log('______________________________\n');

/* To access the last index position of the array */
console.log(listOfNumbers[listOfNumbers.length - 1]);
console.log('______________________________\n');

/* PROPERTIES */

/* Such expressions as myString.length access the 'property' of some value e.g. this expression accesses the length property of the value in myString; 
In the case of Math.max we are accessing the property named max in the "Math" object. 
Except null and undefined, almost all JavaScript values have properties.

The two main ways to access properties in JS are
1. value.x    here x is the literal name of the property
2. value[x]   here x or the expression between the brackets is evaluated to get the property name.

NB: Property names are strings. The dot notation only works with names that look like valid binding names. Use square brackets to access property names that do not follow JS variable name rules e.g. 2 or "told mama. value[2] or value["told mama"] instead.

Note that the elements in an array are stored as the array's properties, using numbers as property names.
*/

let i = 'log';
console.log(i.length); //example of 1. above
console.log('______________________________\n');
console[i](
	"This uses the property access method value[x] that evaluates the expression in square brackets to get the name of the property on the object called 'console'."
); // example of 2. above
console.log('______________________________\n');

/* To know how many elements an array has use its length property*/

console.log(`The array listOfNumbers has  ${listOfNumbers.length} elements`);
console.log('______________________________\n');

/*METHODS*/

/* Properties that contain functions are generally called 'methods' of the value they belong to e.g. toUpperCase() is a method of a string and map() is a method of an array*/

console.log(i.toUpperCase());
console.log('______________________________\n');

let newList = listOfNumbers.map((num) => `This ${num} is cool.`);
console.log(newList);
console.log('______________________________\n');

/* Here are two methods to manipulate an array */

/* push() - To add a value to the end of an array*/
newList.push('Count me in');
console.log(newList);
console.log('______________________________\n');

/* pop() - To remove the last value from an array */
newList.pop();
console.log(newList);
console.log('______________________________\n');

//  OBJECTS

/* When I wish to group different but related data pieces or items together into a single value and then put these grouped values into an array, an object is ideal.

Values of the type 'object' are arbitrary collections of properties.
*/

/* To create an object */

let day1 = {
	events: ['work', 'touched tree', 'pizza', 'running'],
	squirrel: false,
};

/* To access an object property */
console.log(day1.events);
console.log('______________________________\n');

/* To add a property to an object */
day1.date = Date();
console.log(day1);
console.log('______________________________\n');

day1['told mama'] = true; // remember if a property name does not follow JS variable name rules we use [] notation to reference or add it.
console.log(day1);
console.log('______________________________\n');

/* To add an item to an array within an object */
day1.events.push('drank cashew nut juice');
console.log(day1.events);
console.log('______________________________\n');

/* To remove a property from an object use the unary operator 'delete' */
delete day1.date;
console.log(day1);
console.log('______________________________\n');

/* To find out if an object has a property with a given name use the binary operator "in" */

console.log('date' in day1);
console.log('______________________________\n');
console.log('told mama' in day1);
console.log('______________________________\n');

/* To find out what properties an object has, use the "Object.keys()" function. This returns an array of strings - the object's property names. */

console.log(Object.keys(day1));
console.log('______________________________\n');
console.log(Object.keys(console));
console.log('______________________________\n');

/* Use "Object.assign" to copy all properties from one object to another */

let objek2 = {
	weather: 'freezing',
	month: 'July',
	temp: 32,
};

Object.assign(day1, objek2);
console.log(day1);
console.log('______________________________\n');

Object.assign(objek2, { greeting: 'Say hi', home: 'Gulu' });
console.log(objek2);
console.log('______________________________\n');

/* Arrays, then are merely objects specialized for storing sequences of things. */

let journal = [
	{
		events: ['work', 'touched tree', 'pizza', 'running', 'television'],
		squirrel: false,
	},
	{
		events: [
			'work',
			'ice cream',
			'cauliflower',
			'lasagna',
			'touched tree',
			'brushed teeth',
		],
		squirrel: false,
	},
	{ events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'], squirrel: true },
];

console.log(journal);
console.log('______________________________\n');

console.log(journal[1]);

/*    MUTABILITY

We saw that object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types.

Objects work differently. You can change their properties, causing a single object value to have different content at different times.
*/

let journol = [];

function addEntry(events, squirrel) {
	journol.push({ events, squirrel });
}

// Note that the object added to the journal looks a little odd. Instead of declaring properties like events: events, it just gives a property name. This is shorthand that means the same thing—if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(
	[
		'work',
		'ice cream',
		'cauliflower',
		'lasagna',
		'touched tree',
		'brushed teeth',
	],
	false
);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

console.log(journol);

// Computing correlation Pg. 78 Eloquent JS

function phi(table) {
	return (
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
			(table[2] + table[3]) *
				(table[0] + table[1]) *
				(table[1] + table[3]) *
				(table[0] + table[2])
		)
	);
}

console.log(phi([76, 9, 4, 1]));

// ARRAY LOOPS

// CLASSICAL JavaScript Loop
let classNames = ['Jim', 'Janes', 'Franchesko'];

for (let i = 0; i < classNames.length; ++i) {
	let name = classNames[i];
	console.log(`${name} is a brilliant child.`);
}

// MODERN JavaScript Loop

for (let kid of classNames) {
	console.log(`${kid} is a Swim-Club member`);
}

for (let name of classNames) {
	if (name.includes('n')) {
		console.log(`${name} is not a member.`);
	} else {
		console.log(`${name} is a member.`);
	}
}

/*
Note that in case of the loop statements above, when you replace "of" with "in", the loop will print indices instead of actual names.
*/
