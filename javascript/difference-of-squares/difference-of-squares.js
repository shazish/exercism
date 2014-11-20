var diff = function(num) {
	
	this.squareOfSumsFunc = function() {
		sum = 0;
		for (var i = 1; i <= num; i++) {
			sum += i;
		};
		sum *= sum;
		return sum;
	};
	
	this.sumOfSquaresFunc = function() {
		sum = 0;
		for (var i = 1; i <= num; i++) {
			sum += i * i;
		};		
		return sum;
	};
	
	this.squareOfSums = this.squareOfSumsFunc();
	this.sumOfSquares = this.sumOfSquaresFunc();	
	this.difference = this.squareOfSums - this.sumOfSquares;
	return this;
};

module.exports = diff;