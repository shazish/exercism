
function SpaceAge(seconds) {
	this.seconds = seconds;
	this.rounder = function(num) {
		return Math.round(num * 100) / 100;
	};	
	this.onEarth = function() {
		return this.rounder(seconds / 31557600);
	};
	this.onMercury = function() {
		return this.rounder( this.onEarth() / 0.2408467);
	};
	this.onVenus = function() {
		return this.rounder( this.onEarth() / 0.61519726);
	};
	this.onMars = function() {
		return this.rounder( this.onEarth() / 1.8808158);
	};
	this.onJupiter = function() {
		return this.rounder( this.onEarth() / 11.862615);
	};
 	this.onSaturn = function() {
		return this.rounder( this.onEarth() / 29.447498);
	};
	this.onUranus =  function(){
		return this.rounder( this.onEarth() / 84.016846);
	};
	this.onNeptune = function() {
		return this.rounder( this.onEarth() / 164.79132);
	};
	return this;
};
module.exports = SpaceAge;
