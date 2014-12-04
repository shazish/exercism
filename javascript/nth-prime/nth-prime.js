var nthprime = {
	prime: function(n) {	
		for (var i = 2; i <= n / 2; i++) {
			if (n % i == 0)
				return false;
		};		
		return true;
	},
	
	nth: function(n) {
		if (n < 1)
			throw "Prime is not possible";
		var counter = 0;
		var potential_prime = 1;
		while (counter < n) {
			potential_prime++;
			if (nthprime.prime( potential_prime ))
				counter++;				
		};
		return potential_prime;
	},
	
};

module.exports = nthprime;