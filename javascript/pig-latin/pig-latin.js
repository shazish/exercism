module.exports = {
	translate: function(rawphrase) {
		rawphrase = rawphrase.split(" ");
		translatedphrase = "";
		vowels = "aeiou";		
		firsttwo = ['ch', 'qu', 'th'];
		firstthree = ['thr', 'sch'];
		for (var i = 0; i < rawphrase.length; i++) {
			phrase = rawphrase[i];
			if (i > 0)
				translatedphrase += " ";
			if (vowels.indexOf(phrase[0]) != -1)  
				translatedphrase += phrase + "ay";
			else if (firstthree.indexOf(phrase.substr(0,3)) != -1)
				translatedphrase += phrase.substr(3) + phrase.substr(0,3) + "ay";			
			else if (firsttwo.indexOf(phrase.substr(0,2)) != -1)
				translatedphrase += phrase.substr(2) + phrase.substr(0,2) + "ay";
			// translates a word with a consonant preceding qu
			else if (phrase.substr(1,2) == "qu")
				translatedphrase += phrase.substr(3) + phrase.substr(0,3) + "ay";
			// all other cases
			else
				translatedphrase += phrase.substr(1) + phrase.substr(0,1) + "ay";		
		};
		return translatedphrase;
	}
};