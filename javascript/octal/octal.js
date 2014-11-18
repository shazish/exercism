module.exports = function(num) {
	this.toDecimal = function() {
		if (isNaN(num))
			return 0;
		decimalnum = 0;
		for (i = 0; i < num.length ; i++) {
			decimalnum *= 8;
			decimalnum += Number(num[i]);
		};
		return decimalnum;	
	};
	return this;
};