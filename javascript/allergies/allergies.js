function allergy(num) {
	multiplier = 7;
	allergy_list = [];
	numtolist = {
		1: 'eggs',
		2: 'peanuts',
		4: 'shellfish',
		8: 'strawberries',
		16: 'tomatoes',
		32: 'chocolate',
		64: 'pollen',
		128: 'cats'
	}
	
	this.list = function() {
		num = num % 256; // gets rid of the extra bits (think binary)
		while (num > 0 && multiplier > -1) {
			codecomparer = Math.pow(2,multiplier);
			if (num >= codecomparer) {
				allergy_list.push( numtolist[codecomparer] );
				num -= codecomparer;				
			};
			multiplier--;
		};
		return allergy_list.reverse();
	};
	this.allergicTo = function(item) {
		array = this.list();
		if (array.indexOf(item) != -1)
			return true;
		else 
			return false;
	};
	
	return this;
};

module.exports = allergy;