var words = function(input) {
	var split = input.replace('\n'," ").split(" ");
	var wordcount = {};
	
	split.forEach(function(element) {
			if (wordcount[element]) {
				wordcount[element] = wordcount[element] + 1;
			}
			else {
				wordcount[element] = 1;
			}
			
	});
	return wordcount;
};

module.exports = words;