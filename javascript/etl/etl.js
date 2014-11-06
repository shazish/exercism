function transform(inputdic) {
	newdic = {};		
	for (key in inputdic) {
		for (i in inputdic[key]) {
			newdic[ inputdic[key][i].toString().toLowerCase() ] = Number(key);
		}
	};
	return newdic;
};

module.exports = transform;