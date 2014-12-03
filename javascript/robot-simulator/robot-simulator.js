module.exports = function() {
	this.bearing = null;
	this.coordinates = [0, 0];
	this.movement = {
		north: [0, 1],
		east: [1, 0],
		south: [0, -1],
		west: [-1, 0]
	};
	this.orient = function(dir) {
		if ( [ "east", "west", "north", "south" ].indexOf(dir) == -1 )
			throw "Invalid Robot Bearing";
		this.bearing = dir;
	};
	
	this.at = function(x, y) {
		this.coordinates = [x, y];
	};
	
	this.place = function(info) {
		//console.log(info.x, info.y);
		this.at(info.x, info.y);
		this.bearing = info.direction;
	};
	
	this.instructions = function(commands) {
		result = [];
		command_to_movement = {
			A: "advance",
			R: "turnRight",
			L: "turnLeft"
		};
		for (var i = 0; i < commands.length; i++) {
			result.push( command_to_movement[ commands[i] ] );
		};
		return result;
	};
	
	this.evaluate = function(commands) {
		for (var i = 0; i < commands.length; i++) {
			switch (commands[i]) {
				case 'A':
					this.advance();
					continue;
				case 'L':
					this.turnLeft();
					continue;
				case 'R':
					this.turnRight();
					continue;
			};
		};
	}
	
	this.turnRight = function() {
		switch (this.bearing) {
			case "north":
				this.bearing = "east";
				return;
			case "east":
				this.bearing = "south";
				return;
			case "south":
				this.bearing = "west";
				return;
			case "west":
				this.bearing = "north";
				return;
		}
	};
	
	this.turnLeft = function() {
		switch (this.bearing) {
			case "north":
				this.bearing = "west";
				return;
			case "east":
				this.bearing = "north";
				return;
			case "south":
				this.bearing = "east";
				return;
			case "west":
				this.bearing = "south";
				return;
		}
	};
	
	this.advance = function() {
		//console.log(this.bearing);
		this.coordinates[0] += this.movement[this.bearing][0];
		this.coordinates[1] += this.movement[this.bearing][1];
	};
	
	return this;
};