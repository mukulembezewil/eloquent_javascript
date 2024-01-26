import { SCRIPTS } from './3_scripts.mjs';

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}
console.log(filter(SCRIPTS, (script) => script.living));

/*
NOTE: Use of ES module loading.
(node:94110) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

Here since we have no package json we opted to give the relevant files extension .mjs.
*/
