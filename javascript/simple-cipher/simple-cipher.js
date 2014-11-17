module.exports = function(ciphercode) {
	this.randomstring = function(len){
		var output = "";
		while(output.length< len) {
			var n= Math.floor(Math.random() * 26);			
			output += String.fromCharCode(n + 97); //a-z
		}	
		return output;
	}
	
	this.encode = function(input) {
		var output = "";
		for (var i = 0; i < input.length; i++) {
			output += String.fromCharCode( ( ( input.charCodeAt(i) + this.key.charCodeAt(i) - 194) % 26 ) + 97 );
		};
		return output;
	}
	
	this.decode = function(input) {
		var output = "";
		for (var i = 0; i < input.length; i++) {
			delta = input.charCodeAt(i) - this.key.charCodeAt(i);
			if (delta < 0) delta += 26;
			output += String.fromCharCode( delta + 97 );
		};
		return output;
	}
	
	this.validateCipher = function(key) {
		if (key == "") throw new Error("Bad key");
		for (var i = 0; i < key.length; i++) {
			if (key.charCodeAt(i) < 97 || key.charCodeAt(i) > 122)
				throw new Error("Bad key");
		};
	};
	
	if (typeof ciphercode == 'undefined') 
		this.key = this.randomstring(10);
	else {
		this.validateCipher(ciphercode);
		this.key = ciphercode;
	}
		
	return this;
}