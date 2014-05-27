

var fibFunc = function (seedOne, seedTwo, max) {
	var nMinus2 = seedOne; // First term of fibonacci sequence.
	var nMinus1 = seedTwo; // Second term of fibonacci sequence.
	var value = 0; // Declare the value;
	var sum = 0; // Hold the value for even numbers.

		/* Get each value in the fibonacci sequence. */
		while (value < max) {
			value = nMinus1 + nMinus2;
			/* Increment the counter if even */
			if (value % 2 === 0) {
				sum = sum + value;
			}
			
			nMinus2 = nMinus1;
			nMinus1 = value;
			// console.log(sum);
			console.log(value);
		}

		return sum;

};

console.log('---- PROBLEM 2 ----');
console.log(fibFunc(1, 2, 4000000));