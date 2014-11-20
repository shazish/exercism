function handshake(num) {
	multiplier = 3;
	command_list = [];
	numtolist = {
		1: 'wink',
		2: 'double blink',
		4: 'close your eyes',
		8: 'jump'
	}
	
	this.commands = function() {
		var reverseit = (num > 16 ? true : false);		
		num = num % 16; // gets rid of the extra bits (think binary)
		while (num > 0 && multiplier > -1) {
			codecomparer = Math.pow(2,multiplier);
			if (num >= codecomparer) {				
				command_list.push( numtolist[codecomparer] );
				num -= codecomparer;				
			};
			multiplier--;
		};
		if (reverseit)
			return command_list;
		else 
			return command_list.reverse();
	};
	
	if (isNaN(num))
		throw new Error("Handshake must be a number");	
};

module.exports = handshake;