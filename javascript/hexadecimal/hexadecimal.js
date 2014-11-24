function Hexadecimal(hexnum){

	this.toDecimal = function() {

		decimalnum = 0;
		for (i = 0; i < hexnum.length ; i++) {
			decimalnum *= 16;
			decimalnum += this.digitConvert(hexnum[i]);
		};
		if (isNaN(decimalnum)) 
			return 0;
		else
			return decimalnum;	
	};
	
	this.digitConvert = function(n) {
		if ( !isNaN(n) ) return Number(n);
		switch (n) {
			case 'a':
				return 10;
			case 'b':
				return 11;
			case 'c':
				return 12;
			case 'd':
				return 13;
			case 'e':
				return 14;
			case 'f':
				return 15;
			default:
				return undefined;
		}
	};
	return this;
};

module.exports = Hexadecimal;