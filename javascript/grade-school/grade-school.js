function School() {
	var dictionary = {};
	this.add = function(student, grade) {
		if (!dictionary[grade])
			dictionary[grade] = [student];
		else {
			dictionary[grade].push(student);
			dictionary[grade] = dictionary[grade].sort() // sort on the go!
		}
	};
	
	this.roster = function(){
		return dictionary;
	};
	
	this.grade = function(grade) {
		return dictionary[grade] ? dictionary[grade] : [];
	};
	return this;
};

module.exports = School;