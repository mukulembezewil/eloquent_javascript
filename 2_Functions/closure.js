function spy(money) {
	return (more) => money + ' is ' + more;
}

let concat = spy(108000);
console.log(concat('basic'));

/*see page 48 Eloquent JavaScript
