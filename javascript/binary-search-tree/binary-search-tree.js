function Bst(num) {
	var parentnode = new node();
	parentnode.data = num;	
	console.log(parentnode.data);
	
	parentnode.insert = function(num) {
		traversenode = parentnode;
		newnode = new node();
		newnode.data = num;
		console.log(">" + parentnode.data);
		
		while (true) {
			if (num <= traversenode.data) {
				if (typeof traversenode.left != "undefined")
					traversenode = traversenode.left;
				else {
					traversenode.left = newnode;
					break;
				}
			}
			else {			
				if (typeof traversenode.right != "undefined")
					traversenode = traversenode.right;
				else {
					traversenode.right = newnode;			
					break;
				}
			}
		}
	
	};
	return parentnode;
};

var node = function () {
	var data;
	var left;
	var right;
};

// iteration function skipped

module.exports = Bst;
