const numberz = [1, 2, 3, 4, 5];

const expoedNumberz = numberz.map((number) => {
	return number * number;
});

console.log(expoedNumberz);

const namez = ['Julian', 'Pete', 'Grudenko'];

const ocuup = ['is a worker.', 'is a fisherman.', 'is a bizwoman!'];

const mix = namez.map(function (name) {
	return `${name} ${ocuup}`;
});

console.log(mix);
