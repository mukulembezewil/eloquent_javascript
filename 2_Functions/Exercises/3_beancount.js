/* Beancounting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1. Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.*/

function countBs(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'B') {
			count++;
		}
	}
	return count;
}

console.log(countBs('BBB'));

let pix = 'addendum';
let sampleString = 'BBB Example String with B'; // sample string
let numberOfBs = countBs(sampleString); // Count of uppercase B's

console.log(`Total no. of Bs =  ${numberOfBs}`);
console.log('Total no. of Bs is ', numberOfBs, pix);

/*
This function countBs loops through each character of the input string str using a for loop. Within the loop, it checks if each character is equal to the uppercase letter 'B'. If it is, the count variable (count) is incremented. Finally, it returns the total count of uppercase 'B' characters found in the input string.
*/

/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countChar(str, char) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}
	return count;
}

function countBs(str) {
	return countChar(str, 'B');
}

let someString = 'BBB is an example sBring BlenderBa'; // sample string
let oneToCount = 'a';
let numOfChars = countChar(someString, oneToCount);
console.log(`The number of ${oneToCount} letters is:`, numOfChars);

let numOfIs = countBs(someString);
console.log('The number of upperC Bs is : ', numOfIs);
