let total = 0,
	count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}

console.log(total);
console.log('- - - - - - - - - - - - - - - - -');

// console.log(sum(range(1, 10)));  A program like this line to carry out the above would be easier and simpler utilizing abstraction?

for (let pam = 0; pam < 7; pam++) {
	console.log('pam ', pam);
}
console.log('- - - - - - - - - - - - - - - - -');

function repeater(x, action) {
	for (let j = 0; j < x; j++) {
		action(j);
	}
}
repeater(3, console.log);

console.log('- - - - - - - - - - - - - - - - -');

let arrz = [];
repeater(5, (i) => arrz.push(`Unit ${i + 1}`));

console.log(arrz);
