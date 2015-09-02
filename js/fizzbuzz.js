function computeFB() {
	var num = prompt("Please enter a number", "1");

	for (var i = 1; i <= num; i++) {
		var isDividibleByThree = i % 3 === 0;
		var isDivisibleByFive = i % 5 === 0;

		if (isDividibleByThree && isDivisibleByFive) {
			document.write('FizzBuzz<br>');
		} else if (isDividibleByThree) {
			document.write('Fizz<br>');
		} else if (isDivisibleByFive) {
			document.write('Buzz<br>');
		} else {
			document.write(i+'<br>');
		}
	} 
}
computeFB();