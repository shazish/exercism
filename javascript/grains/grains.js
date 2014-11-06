function Grains() {
	 this.square = function(grain){
		return Math.pow(2, grain - 1);
	};
	this.total = function() {
		var sum = 0;
		for (i = 1; i < 65; i++) {
			sum += this.square(i);
		};
		return sum;
	};
};

module.exports = Grains;