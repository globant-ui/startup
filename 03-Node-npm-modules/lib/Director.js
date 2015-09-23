var Director = function () {};
Director.prototype.contructor = Director;
Director.prototype.setName = function (name) {
	this.name = name;
};
Director.prototype.getCompleteName = function () {
	console.log('The name of director is ..: ' + this.name);
};


exports.Director = Director;