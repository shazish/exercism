var childrenList = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry'
];

var vegetables = {
	R: 'radishes',
	C: 'clover',
	G: 'grass',
	V: 'violets'
};

function Garden(diagram, children) {	
	if ( typeof children == "undefined" ) 
		children = childrenList;
	else
		children = children.sort();		
	diagram = diagram.split("\n");
	return parser(diagram, children);
};

function parser(diagram, children) {
	var result = {};
	console.log(children);
	for (var i = 0; i < children.length; i++) {		
		temp = [];
		if ( typeof diagram[0][i * 2] != "undefined" ) {
			temp.push ( vegetables[ diagram[0][i * 2] ] );
			temp.push ( vegetables[ diagram[0][i * 2 + 1] ] );
			temp.push ( vegetables[ diagram[1][i * 2] ] );
			temp.push ( vegetables[ diagram[1][i * 2 + 1] ] );
		};
		result[children[i].toLowerCase()] = temp;
		//console.log(">>" + children[i] + ": " + temp);
	};
	return result;
};


// The most annoying testcases of any exercise in Exercism so far.

module.exports = Garden;