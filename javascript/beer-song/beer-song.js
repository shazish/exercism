var verse = function(input) {
	switch(input) {
		case 0:
			return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
		case 1:
			return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
		default:
			return input.toString() + " bottles of beer on the wall, " + input.toString() + " bottles of beer.\nTake one down and pass it around, " + (input - 1).toString() + " bottles of beer on the wall.\n";
	}
};

var sing = function(input, end) {	
	end = (typeof end === "undefined") ? 0 : end; // handles if no values are provided for 'end'
	str = verse(input);	
	while ( --input >= end ) {
		str += "\n" + verse(input);
	};
	return str;
};

exports.verse = verse;
exports.sing = sing;