// import SCRIPTS from './3_scripts'
require('./3_scripts');

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
