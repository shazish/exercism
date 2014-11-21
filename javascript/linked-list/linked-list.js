function LinkedList() {
	var last;
	var first;
	var counter = 0;
	this.push = function(input) {
		newelement = new Element();
		newelement.val = input;
		newelement.prev = last;
				
		if (typeof last != "undefined") {
			last.next = newelement;			
		}
		if (typeof first == "undefined") {
			first = newelement;			
		}
		last = newelement;
		counter++;
	};
	
	this.pop = function() {
		if (typeof last == "undefined")
			return undefined;
		output = last.val;
		last = last.prev;
		counter--;
		return output;
	};
	
	this.shift = function() {	
		if (typeof first == "undefined")
			return undefined;	
		output = first.val;
		first = first.next;
		counter--;
		return output;
	};
	
	this.unshift = function(input) {
		newelement = new Element();
		newelement.val = input;
		newelement.next = first;
				
		if (typeof first != "undefined") {
			first.prev = newelement;			
		}
		if (typeof last == "undefined") {
			last = newelement;			
		}
		first = newelement;
		counter++;
	};
	
	this.delete = function(input) {
		var trav = first;
		for (i = 0; i < counter; i++) {
			if (trav.val == input) {
				if (typeof trav.next != "undefined")
					trav.next.prev = trav.prev.next;
				if (typeof trav.prev != "undefined")
					trav.prev.next = trav.next.prev;
				counter--;
				return;	
			}
			else if (typeof trav.next != "undefined") 
				trav = trav.next;			
		};
	}
	
	this.count = function() {
		return counter;
	};
	
	return this;	
};

var Element = function() {
	var val; 
	var prev;
	var next;
};

module.exports = LinkedList;