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
