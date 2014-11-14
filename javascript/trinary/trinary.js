module.exports = function Trinary(num) {
	this.toDecimal = function() {
		if (isNaN(num)) return 0;
		var sum = 0;
		num = num.split("").reverse().join("");
		for (var i = 0; i < num.length; i++) {
			sum += Number(num[i]) * Math.pow(3,i);
		};
		return sum;
	};
};