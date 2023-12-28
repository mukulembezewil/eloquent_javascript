// ♋ unshift() and shift()

// to add and remove things to/from start of an array
// remember push() and pop() add and remove things to/from end of an array

let thisArray = ['Dog', 'Cat', 'Cow', 'Cat'];
thisArray.unshift('Chicken'); // Add element to start of array
thisArray.unshift('Duck');

console.log(thisArray);

console.log(thisArray.shift()); // Remove first element from array and return it

/*
The program below manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do some- thing, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue.
*/
let todoList = [];
function remember(task) {
	todoList.push(task);
}
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}

// ♋ indexOf()

// returns the first index at which a given element can be found in the array.
// returns -1 if it cannot be found.
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');
console.log(thisArray);
console.log(
	`The index position of Cat in thisArray is ${thisArray.indexOf('Cat')}`
);

// ♋ lastIndexOf()

//returns the last index at which a given element can be found in the array.
console.log(thisArray.lastIndexOf('Cat'));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

//Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.

// ♋ slice()

// takes start and end indices and returns an array that has only the elements between them.

let maPieces = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(maPieces.slice(1, 4));
// Note that the start index is inclusive, the end index exclusive.

console.log(maPieces.slice(2));
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');
// When the end index is not given, slice will take all of the elements after the start index.

// You can also omit the start index to copy the entire array. As below:
let yaPieces = maPieces.slice();

console.log(yaPieces);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// ♋ concat()

// glues arrays together to create a new array, similar to what the + operator does for strings.

let arr_one = ['water', 'juice'];
let arr_two = ['beer', 'wine'];

let arr_three = arr_one.concat(arr_two);
console.log(arr_three);
console.log('\n_+_+_+_+_+_+_+_+_+_+_+_+_+_+\n');

// concat() and slice() in action

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(['a', 'b', 'c', 'd', 'e', 'f'], 2));

// If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.
