function tri(a, b, c) {
	this.sum = function() {
		return a + b + c;
	};
	this.product = function() {
		return a * b * c;
	};
	this.isPythagorean = function() {
		return Math.pow(a, 2) +  Math.pow(b, 2) == Math.pow(c, 2);
	};
	tri.where = function(condition) {
		min = condition.minFactor || 1;
		max = condition.maxFactor;
		sum = condition.sum;
		result = [];
		for (i = min; i <= max; i++) {
			for (j = i+1; j <= max; j++) {
				for (k = j+1; k <= max; k++) {
					temp = new tri(i, j, k)
					if (temp.isPythagorean() && (!sum || sum == temp.sum()) )
						result.push(temp);
				};
			};
		};
		return result;		
	}
};

module.exports = tri;