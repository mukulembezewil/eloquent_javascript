import { SCRIPTS } from './3_scripts.mjs';

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));
