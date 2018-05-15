"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Actor class
var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

exports.default = Actor;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = require('./Logger.js');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//EventEmitter class
var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.event = {};
    }

    //EventPlay = Event added - callback = function added


    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventPlay, callback) {
            //If the event exists within the object
            if (this.event[eventPlay]) {
                //Evaluate if it is associated with the same function
                if (this.event[eventPlay].indexOf(callback) != -1) {
                    console.log('Its already exists');
                }
                //If not, I assigned the new function
                else {
                        this.event[eventPlay].push(callback);
                    }
            } else {
                //If not exist, i create the event as an array, and i assigned the function
                this.event[eventPlay] = [];
                this.event[eventPlay].push(callback);
            }
        }

        //Receive the event to be deleted with the function

    }, {
        key: 'off',
        value: function off(eventPlay, callback) {
            //If the event exist and there are more than one
            if (this.event[eventPlay].length > 1) {
                //I find the function that corresponds to the event
                var deleteEvent = this.event[eventPlay].indexOf(callback);
                //I eliminated this function.
                this.event[eventPlay].splice(deleteEvent, 1);
            }
            //If the event does not exist
            else if (this.event[eventPlay].length) {
                    console.log('Unknown event');
                }
                //If the event exist but not more than one, i delete it
                else {
                        var _deleteEvent = this.event[eventPlay].indexOf(callback);
                        this.event[eventPlay].splice(_deleteEvent, 1);
                        delete this.event[eventPlay];
                    }
        }

        //Receive the event that want to emitt

    }, {
        key: 'emit',
        value: function emit(events) {
            //Assign to the variable the arrangement of events
            var eventsEmitted = this.event[events];
            //If the variable is empty or has no elements
            if (!eventsEmitted || !eventsEmitted.length) {
                console.log('The event is empty');
            }
            //Execute the function with the event I want to emit
            eventsEmitted.forEach(function (getEvents) {
                if (!getEvents) {
                    console.log('The callback does not exist');
                } else {
                    getEvents(events);
                }
            });
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log("The event '" + info + "' has emitted");
        }
    }]);

    return Logger;
}();

exports.default = Logger;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require('./EventEmitter.js');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            this.emit('play');
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.emit('stop');
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit('resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(newCast) {
            var _this2 = this;

            if (Array.isArray(newCast)) {
                newCast.forEach(function (value, index) {
                    _this2.cast.push(value);
                });
            } else {
                this.cast.push(newCast);
            }
        }
    }]);

    return Movie;
}(_EventEmitter3.default);

exports.default = Movie;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Social = {
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    },
    share: function share(friendName) {
        console.log(friendName + " share " + this.title);
    }
};

exports.default = Social;
"use strict";

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

var _Movie = require("./Movie.js");

var _Movie2 = _interopRequireDefault(_Movie);

var _Logger = require("./Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Social = require("./Social.js");

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Batman = new _Movie2.default('Batman', 1900, 32);
var Log = new _Logger2.default();
Batman.on("play", Log.log);
Batman.on("play", Log.test);
Batman.on("stop", Log.log);
// Batman.off("play", Log.test);
Batman.play();
Batman.stop();
console.log(Batman.event);

var Will = new _Actor2.default('Will Smith', 22);
var OtherActors = [new _Actor2.default('Brad Pitt', 33), new _Actor2.default('Leonardo Di Caprio', 44)];
Batman.addCast(Will);
Batman.addCast(OtherActors);
console.log(Batman.cast);

Object.assign(Batman, _Social2.default);
Batman.like('Pedro');
Batman.share('Juan');
