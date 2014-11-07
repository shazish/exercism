var clock = {
	at: function(hhh, mmm) {
		hh = hhh;
		if (typeof mmm === "undefined") mmm = 0;
		mm = mmm;
	
		this.toString = function(){
			hour = this.doubledigits(hh);
			minute = this.doubledigits(mm);
			//console.log(hour + ":" + minute);
			return hour + ":" + minute;
		};
		this.doubledigits = function(num) {
			if (typeof num === "undefined")
				return '00';
			else if (num < 10)
				return '0' + num.toString();
			else return num.toString();
		};		
		this.plus = function(m) {			
			hh = (hh + Math.floor( (m + mm) / 60)) % 24;
			mm = (mm + m) % 60;
			if (mm < 0) mm += 60;
			if (hh < 0) hh += 24;
			return this;
		};			
		this.minus = function(m) {			
			this.plus(-m);
			return this;
		};		
		this.equals = function(clock2) {
			// I'm expecting 'this' to refer to clock1, but it's refering to clock2
			// Seems like I no longer have access to clock1 (the object that calls equals function)
			// what am I doing wrong?
			console.log(self.mm + " " + clock2.mm);
			return ((clock2.mm == mm) && (clock2.hh == hh));
		};
		return this;		
	}
};

module.exports = clock;