(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

exports.Actor = Actor;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMovie = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('./EventEmitter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classMovie = function (_EventEmitter) {
  _inherits(classMovie, _EventEmitter);

  function classMovie(title, year, duration) {
    _classCallCheck(this, classMovie);

    var _this = _possibleConstructorReturn(this, (classMovie.__proto__ || Object.getPrototypeOf(classMovie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(classMovie, [{
    key: 'play',
    value: function play() {
      _get(classMovie.prototype.__proto__ || Object.getPrototypeOf(classMovie.prototype), 'emit', this).call(this, this, 'play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      _get(classMovie.prototype.__proto__ || Object.getPrototypeOf(classMovie.prototype), 'emit', this).call(this, this, 'pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      _get(classMovie.prototype.__proto__ || Object.getPrototypeOf(classMovie.prototype), 'emit', this).call(this, this, 'resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {

      if (Array.isArray(actor)) {
        var maxIndex = actor.length;
        var i = this.cast.length;
        var j = 0;
        do {
          this.cast.push(actor[j]);
          j++;
          i++;
        } while (j <= maxIndex && i <= 4);
      } else if ((typeof actor === 'undefined' ? 'undefined' : _typeof(actor)) === 'object') {

        if (this.cast.length < 4) {
          this.cast.push(actor);
        }
      }
    }
  }]);

  return classMovie;
}(_EventEmitter2.EventEmitter);

;
exports.classMovie = classMovie;

},{"./EventEmitter":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = new Object();
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (this.listeners[event] != callback) {
        this.listeners[event] = callback;
      }
    }
  }, {
    key: "off",
    value: function off(event) {
      if (this.listeners[event]) {
        this.listeners[event] = undefined;
      }
    }
  }, {
    key: "emit",
    value: function emit(movie, event) {
      if (this.listeners[event]) {
        this.listeners[event](movie, event);
      }
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger() {
    _classCallCheck(this, logger);
  }

  _createClass(logger, [{
    key: "log",
    value: function log(movieInstance, functionName) {
      console.log(movieInstance.title + " " + functionName);
    }
  }]);

  return logger;
}();

exports.logger = logger;

},{}],5:[function(require,module,exports){
'use strict';

var _EventEmitter = require('./EventEmitter');

var _Actors = require('./Actors');

var _ClassMovie = require('./ClassMovie');

var _Logger = require('./Logger');

var Social = {
  likes: function likes(friendName) {
    console.log(friendName + ' likes ' + this.title);
  },
  shares: function shares(friendName) {
    console.log(friendName + ' shares ' + this.title);
  }
};
var mylogger = new _Logger.logger();
var Movie1 = new _ClassMovie.classMovie("Lord of the Rings I", "1996", "220");
var Movie2 = new _ClassMovie.classMovie("Lord of the Rings II", "1997", "320");
var Movie3 = new _ClassMovie.classMovie("Lord of the Rings III", "1998", "300");
var Actor1 = new _Actors.Actor("Leonardo Di Caprio", 40);
var newCast = [new _Actors.Actor("Arnold", 60), new _Actors.Actor("John", 39), new _Actors.Actor("Ricardo Darín", 46)];
Object.assign(Movie1, Social);
Object.assign(Movie2, Social);
Object.assign(Movie3, Social);
Movie1.on('play', mylogger.log);
Movie1.play();
Movie1.on('resume', mylogger.log);
Movie1.resume();
Movie1.off('play');
Movie1.play();
Movie1.likes('Mike Tyson');
Movie2.shares('Arnold');
Movie1.addCast(Actor1);
Movie1.addCast(newCast);
console.log(Movie1.cast[0]);
console.log(Movie1.cast[1]);
console.log(Movie1.cast[2]);
console.log(Movie1.cast[3]);

},{"./Actors":1,"./ClassMovie":2,"./EventEmitter":3,"./Logger":4}]},{},[5]);
