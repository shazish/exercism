WordProblem = function(question){
	var sum = 0;		
	var question = question.replace('?','').split(" ");
	
	WordProblem.prototype.answer = function() { // won't work without prototype	
	
		if (question[0] != 'What' || question[1] != 'is') // checks the first two words.
			throw new ArgumentError();
			
		i = 2;
		sum = Number(question[i]);	
		while (typeof question[i + 1] != "undefined") {			
			switch (question [i + 1]) {
				case "plus":
					sum = sum + Number(question[i + 2]);
					i += 2;
					continue;	
				case "minus":
					sum = sum - Number(question[i + 2]);
					i += 2;	
					continue;
				case "multiplied":
					sum = sum * Number(question[i + 3]); 
					i += 3;
					continue;
				case "divided":
					sum = sum / Number(question[i + 3]);
					i += 3;						
					continue;
				case "plus":
					sum = sum + Number(question[i + 2]);
					i += 2;
					continue;
				default:
					throw new ArgumentError();				
			}
		};	
		return sum;
	};		
	
}

ArgumentError = function() {};	

exports.WordProblem   = WordProblem;
exports.ArgumentError = ArgumentError;