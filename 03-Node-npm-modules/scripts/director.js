
var Director = function Director (name) {
  this.attributes = {
    name : name, 
    quotes : []
  };
};

Director.prototype.set = function (attr, value) {
  this.attributes[attr] = value;
};

Director.prototype.get = function (attr) {
  return this.attributes[attr];
  };

Director.prototype.speak = function () {
  return this.attributes['name'] + ' says ' + this.attributes.quotes ;
};

module.exports = Director;