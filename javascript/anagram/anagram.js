var anagram = function(word) {
	var array_of_anagrams = [];	
	var arranged = function(input) {
		return input.toLowerCase().split('').sort().join("");
	}
	var anagram_check = function(inputstring, input2) { 
		for (i = 0; i < inputstring.length; i++) {
			if ( arranged(inputstring[i]) == arranged(input2) && inputstring[i].toLowerCase() !== input2.toLowerCase() )
				array_of_anagrams.push(inputstring[i]);
		}
	}
	this.matches = function(otherwords) {
		if (arguments.length > 1)  // handles string arguments!			
			anagram_check(arguments, word) 						
		else // handles arrays
			anagram_check(otherwords, word)		
		return array_of_anagrams;
	};
	return this
}

module.exports = anagram;