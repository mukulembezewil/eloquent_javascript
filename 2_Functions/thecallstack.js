// function greet(who) {
// 	console.log('Hello ' + who);
// }
// greet('Milly');
// console.log('Bye');

// function minus(a, b) {
// 	if (b === undefined) {
// 		console.log('Viola');
// 		return -a;
// 	} else {
// 		return a - b;
// 	}
// }
// console.log(minus(10));
// console.log(minus(10, 5));

// function power(base, exponent = 2) {
// 	let result = 1;
// 	for (let count = 0; count < exponent; count++) {
// 		result *= base;
// 	}
// 	return result;
// }

// console.log(power(4));
// console.log('');
// console.log(power(2, 6));

function wrapValue(n) {
	let local = n;
	return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log('');
console.log(wrap2());
