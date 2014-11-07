function roman(num) {
	romanstring = "";
	prevkey = 0; 
	// using a dictionary is not a good solution here, as it 
	// makes me use an extra variable for keeping track of the 
	// previous key during traversing the dictionary.
	this.to_roman = { 
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		9: 'IX',
		5: 'V',
		4: 'IV',
		1: 'I' 
	}	
	while (num > 0) {
		for (key in to_roman) {
			if (key > num) {														
				break;			
			else 
				prevkey = key;
		};
		romanstring += to_roman[prevkey];
		num -= prevkey;
	};
	return romanstring;

};

module.exports = roman;