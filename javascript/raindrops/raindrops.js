function rain() {
	this.convert = function(num) { 
		rainsounds = "";
		if (num % 3 == 0) rainsounds += "Pling";
		if (num % 5 == 0) rainsounds += "Plang";
		if (num % 7 == 0) rainsounds += "Plong";	
		if (rainsounds !== "") 
			return rainsounds;
		else 
			return String(num);
	};
	return this;
}
module.exports = rain;



