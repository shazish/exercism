function circularBuffer(capacity) {
	var buffer = [];
	var r_ptr = 0;
	var w_ptr = 0;	
	var filled = 0;
	return {
		read: function() {
			if (filled == 0 || isEmpty(buffer[r_ptr])) {
				throw new bufferEmptyException();
			};
			// console.log ("ptr " + r_ptr + " data " + buffer[r_ptr]);
			toReturn = buffer[r_ptr];
			buffer[r_ptr] = null;
			ReadPtrUpdate();
			filled -= 1;
			return toReturn;
		},
		
		write: function(data) {
			if (isEmpty(data)) return; 
			if (filled >= capacity) {
				throw new bufferFullException();
			};
			buffer[w_ptr] = data;
			WritePtrUpdate();
			filled += 1;
		},
		
		forceWrite: function(data) {
			if (isEmpty(data)) return; 
			buffer[w_ptr] = data;
			WritePtrUpdate();
			if (filled < capacity)
				filled += 1;
			else 
				ReadPtrUpdate();
		},		
		
		clear: function() {
			buffer = [];
			filled = 0;
			r_ptr = 0;
			w_ptr = 0;	
		}
		
	};
	
	function WritePtrUpdate() {
		//console.log ("ptr " + ptr);
		return (++w_ptr) % capacity;
	};
	
	function ReadPtrUpdate() {
		//console.log ("ptr " + ptr);
		return (++r_ptr) % capacity;
	};

	function isEmpty(data){
		return (data == null || typeof data == 'undefined');
	};
	
};

function bufferFullException() {};
function bufferEmptyException() {};



module.exports = { 
  circularBuffer: function(capacity) {
    return new circularBuffer(capacity);
  },
  
  bufferEmptyException: function() {
    return new bufferEmptyException();
  },

  bufferFullException: function() {
    return new bufferFullException();
  }  
};