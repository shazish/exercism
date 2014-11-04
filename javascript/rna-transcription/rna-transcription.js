function toRna(input) {
	var rnastring = "";
	var rnadictionary = { 'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'};
	for (var i = 0; i < input.length ; i++) {
		rnastring += rnadictionary[ input[i] ];
	};
	return rnastring;
};

module.exports = toRna;