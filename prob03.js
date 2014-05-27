/*
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600,851,475,143 ?

* Start with a sieve of eratosthenes

*/

// List the integers from 1 to n


// var limit = 600851475143;

var factorNumber = 4037 // 

function sieveOfEro (number) {
	/* Set old and new arrays. */
	var factorArray = [];
	/* Push numbers 2 to n into the old array. */
	for (var i = 2; i <= factorNumber; i++) {
		factorArray.push(i);
	}

	var factor = factorArray[0];
	for (var i = 0; i < factorArray.length; i++) {
		/* Set the factor to check for multiples. */
		/* Remove composite numbers. */
		for (var j = 0; j < factorArray.length; j++) {
			if (factorArray[j] % factor === 0 && factorArray[j] !== factor) {
				factorArray.splice(j, 1);
			}
		} // End inner loop.	
		
		factor = factorArray[i + 1] // Set the factor to the next number in the sequence.
	} // End outer loop.
	
	return factorArray;
};

// console.log(sieveOfEro(factorNumber));

var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }	
    }

    return output;
};

eratosthenes(121);