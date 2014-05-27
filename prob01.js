/*
Find sum of multiples of 3 and 5 below 1000
*/


/*
@method: Brute force.
@solution description: Loop through range and count if i is divisible by 3 or 5.
*/

var threeFive = function () {
	var counter = 0;
	for (var i = 1; i < 1000; i ++) {
		if (i % 3 === 0 || i % 5 === 0) {
			counter = counter + i;
		}
	}
	
	return counter
};

/*
@method: use properties of arithmetic sequences / series.
@solution step 1: Recognize that the sum of all multiples of 3 < 1,000 and the sum of all multiples of 5 < 1,000 are arithmetic series.
@solution step 2: You can get the sum of an arithmetic series by multiplying the average of the series by the number of terms in the sequence.
@solution step 3:  

*/

var getMultSum = function (number, max) {
	var totalTerms = Math.floor(max / number); // Get number of terms in the sequence.
	var nthTerm = totalTerms * number; // Get final term of the sequence.
	var avg = (number + nthTerm) / 2; // Get the average of the sequence.
	return avg * totalTerms;
};

var twoMultipleSum = function (firstNumber, secondNumber, max) {
	var firstSum = getMultSum(firstNumber, max);
	var secondSum = getMultSum(secondNumber, max);
	var cancelSum = getMultSum(firstNumber * secondNumber, max);

	return firstSum + secondSum - cancelSum;
};

/* MAIN */

console.log('---- PROBLEM 1 ----')
console.log(threeFive());
console.log(twoMultipleSum(3, 5, 999));



