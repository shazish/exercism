function Gigasecond(now) {
	this.date = function () {		
		newdate = new Date();
		newdate.setTime(now.getTime() + 1000000000000 );		
		return new Date(newdate.getFullYear(), newdate.getMonth(), newdate.getDate());
	};
};

module.exports = Gigasecond;
