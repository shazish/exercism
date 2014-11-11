exports.for = function(num) { // cheated exports.for line from the answers, as defining for as function kept failed!
	primefactors = [];
	primechecker = 2;
	//console.log("----\nnum: " + num);
	while ( primechecker * primechecker <= num ) {
		while ( num % primechecker == 0 ) {
			primefactors.push(primechecker);
			//console.log("pushed: " + primechecker);
			num /= primechecker;
		};
		primechecker++;
	};
	if (num > 1) { primefactors.push(num); } 
	return primefactors;
};


