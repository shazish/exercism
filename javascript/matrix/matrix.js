function Matrix(phrase) {
	this.rows = phrase.split("\n")
	this.columns = [];
	for (i = 0; i < this.rows.length; i++) {
		this.rows[i] = this.rows[i].split(" ");
		for (j = 0; j < this.rows[i].length; j++) {
			this.rows[i][j] = Number(this.rows[i][j]);
			if (!this.columns[j]) this.columns[j] = [];	// initializes column[j] for later push action
			this.columns[j].push( this.rows[i][j] );
		};
		//console.log(this.rows[i]);		
	};
	return this;
};

module.exports = Matrix;