module.exports = function(num) {
	this.primes = [];	
	outerloop:
	for (var i = 2; i <= num; i++) {
		for (var j = 2; j <= Math.sqrt(i) ; j++) {
			if (i % j == 0) 
				continue outerloop;
		};
		this.primes.push(i);
	};
	return this;
};