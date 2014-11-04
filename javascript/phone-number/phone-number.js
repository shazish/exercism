var PhoneNumber = function(rawinput) {
	output = "";
	for (var i = 0; i < rawinput.length; i++) {
		if ( !isNaN(rawinput[i]) && rawinput[i] != " "	)
			output += rawinput[i];
	};
	
	if (output.length == 11 && output.substring(0,1) == "1") 
		output = output.substring(1, 12);
	else if (output.length != 10)
		output = "0000000000";
	
	this.number = function() {
		return output;
	};
	
	this.areaCode = function() {
		return output.substring(0,3);
	};
	
	this.toString = function() {
		return "(" + this.areaCode() + ") " + output.substring(3,6) + "-" + output.substring(6,10);
	};
	
	return this;
};

module.exports = PhoneNumber;