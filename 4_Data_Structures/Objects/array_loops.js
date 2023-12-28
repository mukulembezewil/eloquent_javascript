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
