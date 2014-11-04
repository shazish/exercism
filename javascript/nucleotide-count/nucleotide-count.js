var dna = function(input) {
	input = (typeof input === "undefined") ? '' : input; // handles if no values are provided
	verifier = "ATCG";
	var acids = (input || ''); // got this line from https://github.com/exercism/xjavascript/blob/master/nucleotide-count/example.js
	
	for (var acid in acids) { // checks to see if the input string is qualified
		for (i = 0; i < acid.length; i++) {
			if (verifier.indexOf( input[i] ) == -1) 			
				throw new Error(ex); 			
		}
    }
	
	this.count = function(comparer) {
			counter = 0;
			if (input == '') return 0;
			for (i = 0; i < input.length; i++) {
				if (input[i] == comparer)
					counter++;
			};
			return counter;
	};
	
	this.histogram = function() {
		counter = { A: 0, T: 0, C: 0, G: 0 };
		for (i = 0; i < input.length; i++) {
			counter[input[i]]++;					
		};
		return counter;		
	};
	
	return this;
};

module.exports = dna;