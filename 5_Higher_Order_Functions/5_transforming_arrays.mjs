import { SCRIPTS } from './3_scripts.mjs';

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
console.log(map(rtlScripts, (s) => s.name));

let ages = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
	ages.map((age) => `Multiplied by 2 the age would be: , ${age * 2}`)
);
