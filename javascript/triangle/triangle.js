function triangle(a, b, c) {
	this.kind = function() {
		if ( (a <= 0) || (b <= 0) || (c <= 0) ||
			( a + b <= c ) || ( a + c <= b ) || ( b + c <= a) )
		
			throw new Error();
		if (a == b)
			if (a == c)
				return "equilateral";
			else
				return "isosceles";
		else
			if (a == c || b == c)
				return "isosceles";
			else
				return "scalene";
	};
};

module.exports = triangle;