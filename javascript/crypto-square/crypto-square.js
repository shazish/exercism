module.exports = function a(phrase)  {
	
	this.normalizePlaintext = function() {
		var result = "";
		for (i = 0; i < phrase.length; i++) {
			ch = phrase.toLowerCase().charCodeAt(i);
			if ( ( ch > 47 && ch < 58 ) || ( ch > 96 && ch < 123 ) ) // leaves ch untouched if it's a number
				result += String.fromCharCode(ch);							
		};
		return result;
	};
	
	this.size = function() {
		return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
	};
	
	this.plaintextSegments = function() {
		return this.textSplitter(this.normalizePlaintext());

	};	
	
	this.ciphertext = function() {
		var temp = "";
		var result = [];
		var init_text = this.plaintextSegments();
		for (var j = 0; j < init_text[0].length; j++) {
			for (var i = 0; i < init_text.length; i++) {
				if (typeof init_text[i][j] != 'undefined')
					temp += init_text[i][j];
				//console.log ("s" + temp + "/" + init_text[i][j]);
			};
		};
		return temp;
	};
	
	this.normalizeCiphertext = function() {
		var arraybasedresult = this.textSplitter(this.ciphertext());
		var result = arraybasedresult[0];
		for (var i = 1; i < arraybasedresult.length; i++) {
			result += " "+ arraybasedresult[i];
		};
		return result;
	};
	
	this.textSplitter = function(text_to_split) {
		var result = [];
		var temp = "";
		//console.log(normalizedText.length);
		for (var i = 0; i < text_to_split.length; i++) {
			temp += text_to_split[i];
			if ( temp.length == this.size() ) {				
				result.push(temp);
				temp = "";
			};
		};
		if (temp != "")
			result.push(temp); // push the remainder
		//console.log ("s" + result.length);
		return result;	
	};
};