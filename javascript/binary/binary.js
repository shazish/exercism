function binary(binarynum){

	this.toDecimal = function() {
		if (isNaN(binarynum))
			return 0;
		decimalnum = 0;
		for (i = 0; i < binarynum.length ; i++) {
			decimalnum *= 2;
			decimalnum += Number(binarynum[i]);
		};
		return decimalnum;	
	};
	return this;
};

module.exports = binary;