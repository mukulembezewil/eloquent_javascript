/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/

function smallest(x, n) {
	return Math.min(x, n);
}

console.log(smallest(2, 4));
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');

function fattest(x, n) {
	return Math.max(x, n);
}

console.log(`The fattest number of all is ${fattest(7, 2)}`);
