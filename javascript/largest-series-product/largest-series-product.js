module.exports = function(numstring) {
	splitted = numstring.split("");
	this.digits = [];
	for (var i = 0; i < splitted.length; i++) {
		this.digits.push(Number(splitted[i]));
	};	
	
	this.slices = function(slice) {
		var result = [];
		for (var i = 0; i < this.digits.length - slice + 1; i++) {
			var temp = [];
			for (var j = 0; j < slice; j++) {
				temp.push( this.digits[i+j] );				
			};
			result.push(temp);
		};
		return result;
	};
	
	this.largestProduct = function(num){
		if (num > this.digits.length)
			throw new Error('Slice size is too big.');
			
		var temp = this.slices(num);
		var max = 1;
		for (var i = 0; i < temp.length; i++) {
			var tempsum = 1;			
			for (var j = 0; j < temp[i].length; j++) {
				tempsum *= temp[i][j];
			}				
			if (tempsum > max) 
				max = tempsum;							
		};	
		return max;
	};
};