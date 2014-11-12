module.exports = {	
	keep: function(inputarray, funct) {
		return this.strainFunction(inputarray, funct, true);
	},
	discard: function(inputarray, funct) {
		return this.strainFunction(inputarray, funct, false);
	},
	strainFunction: function(inputarray, funct, outcome) {
		result = [];
		inputarray.forEach(function(item){		
			if (funct(item) == outcome)
				result.push(item);			
		});	
		return result;	
	}
};
