accumulate = function(inputarray, funct) {
	var result = [];	
	for (var i = 0; i < inputarray.length; i++)	{
		result.push(funct(inputarray[i]));			
	};	
	return result;	
};

module.exports = accumulate;