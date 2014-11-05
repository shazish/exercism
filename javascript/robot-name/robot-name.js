function Robot() {
	var name;
	charlist = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";	
	function chargen(){
		return charlist [ Math.floor(Math.random() * charlist.length) ];
	};
	function numgen() {
		return Math.floor(Math.random() * 900) + 100 ;
	};
	function createName() {
		return chargen() + chargen() + numgen();
	};
	this.reset = function() {
		this.name = null;				
	};
	this.name = createName();
	
}

module.exports = Robot;
