console.log('The future says: ', future());

function future() {
	return 'Yes!! Yes!! Yes!!';
}

console.log(
	((x) => {
		return x * x;
	})(3)
);

(() => {
	console.log('Ki ekiri wano?');
})();

const anotherFunc = function (z) {
	return `This ${z} is saying bbo!`;
};

console.log(anotherFunc('Jim'));
