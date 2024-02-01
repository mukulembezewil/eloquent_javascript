function reverseArray(array) {
	return array.reverse();
}

let arrBee = [1, 2, 3, 4, 5];
console.log(reverseArray(arrBee));

// let arrCee = arrBee.reverse();

// console.log(arrCee);

// console.log(arrBee.reverse());

const larche = arrBee.filter((num) => num % 2 === 0);
console.log(larche);

console.log('***********************************');

let mArray = [
	{
		name: 'jupyter',
		minArr: [
			[0, 9],
			[10, 19],
		],
	},
	{
		name: 'venus',
		minArr: [
			[20, 29],
			[30, 39],
		],
	},
];

// iterate over mArray

//for every element in mArray iterate over minArr
let total = 0;
let count = 0;
for (planet of mArray) {
	for ([lower, upper] of planet.minArr) {
		count = upper - lower + 1;
		total += count;
	}
}

console.log(total);
// for every element in minArr which is an array of arrays,

//considering and including the first number in the element as the lower bound and the second number as the upper bound,
//count how many numbers there are in the range and keep count in some variable
// sum up all the 'counts' into one total
//return the total count
