function series(num) {
	this.digitsGen = function() {
		var result = [];
		for (i = 0; i < num.length; i++) {
			result.push(Number(num[i]));
		};
		return result;
	};
	this.slices = function(slice) {
		if (slice > num.length) 
			throw new Error('Slice size is too big.');
		var result = [];
		for (var i = 0; i < num.length - slice + 1; i++) {
			result.push( new series( num.substr(i, slice) ).digitsGen() );
		};
		return result;
	};
	this.digits = this.digitsGen();
	
	return this;
};

module.exports = series;