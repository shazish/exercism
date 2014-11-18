function luhn(num) {
	this.checkDigitFunc = function() {
		return num % 10;
	};
	
	this.addendsFunc = function() {		
		var digitarray = [];		
		var numtext = num.toString();
		for (var i = 0; i < numtext.length; i++) {
			if ( (numtext.length - i ) % 2 == 0) {		
				if (Number(numtext[i]) * 2 > 9) 
					digitarray.push(Number(numtext[i]) * 2 - 9);
				else
					digitarray.push(Number(numtext[i]) * 2);				
			}
			else 
				digitarray.push(Number(numtext[i]));
			console.log(digitarray);
		};
		return digitarray;
	};
	
	this.checksumFunc = function() {
		var sum = 0;	
		for (var i = 0; i < this.addends.length; i++ ) {
			sum += this.addends[i];
		};
		return sum;
	};
	
	this.create = function(rawnum) {
		// I'm bored with this exercise!
	};
	
	this.validFunc = function(){
		return (this.checksum % 10 == 0) 			
	};
	
	this.addends = this.addendsFunc();
	this.checkDigit = this.checkDigitFunc();
	this.checksum = this.checksumFunc();
	this.valid = this.validFunc();
	return this;
};

module.exports = luhn;