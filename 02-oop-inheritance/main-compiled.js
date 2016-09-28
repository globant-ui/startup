"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// once the DOM has loaded
window.onload = function () {
    var Gladiator = void 0;
    var Armageddon = void 0;
    var Terminator = void 0;
    var EventEmitter = void 0;
    var methodStatus = void 0;
    var listenerOne = void 0;
    var Social = void 0;
    var Actors = void 0;
    var otherCast = void 0;

    // create the class 'EventEmitter'
    // an object that allows another objects to watch it
    EventEmitter = function () {
        function EventEmitter() {
            _classCallCheck(this, EventEmitter);

            // initialize a 'map'
            this.listeners = new Map();
        }

        // method 'on' (pass a callback that will be executed each time a given event is triggered)


        _createClass(EventEmitter, [{
            key: "on",
            value: function on(label, callback) {
                this.listeners.has(label) || this.listeners.set(label, []);
                this.listeners.get(label).push(callback);
            }

            // method 'emit' (allows the class to trigger events)

        }, {
            key: "emit",
            value: function emit(label) {
                return this.listeners.get(label);
            }

            // method 'off' (deletes the listener)

        }, {
            key: "off",
            value: function off(label, callback) {
                this.listeners.delete(label, callback);
            }
        }]);

        return EventEmitter;
    }();

    // first object
    listenerOne = new EventEmitter();

    // execute the three methods
    // listenerOne.on("movieOne", methodStatus("On"));
    // listenerOne.emit(methodStatus("Emit"));
    // listenerOne.off(methodStatus("Off"));

    // create the class 'movie'

    var Movie = function (_EventEmitter) {
        _inherits(Movie, _EventEmitter);

        // the movie class has 3 properties
        function Movie(name, year, duration) {
            _classCallCheck(this, Movie);

            var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));
            // super 'keyword' brings the methods of the father


            _this.kind = "Movie";
            _this.name = name;
            _this.year = year;
            _this.duration = duration;
            _this.array = [];
            return _this;
        }

        // .. and 3 methods


        _createClass(Movie, [{
            key: "play",
            value: function play() {
                EventEmitter.emit("play");
            }
        }, {
            key: "pause",
            value: function pause() {
                EventEmitter.emit("pause");
            }
        }, {
            key: "resume",
            value: function resume() {
                EventEmitter.emit("resume");
            }
        }, {
            key: "addCast",
            value: function addCast(actor) {
                this.array = this.array.concat(actor);
            }
        }]);

        return Movie;
    }(EventEmitter);

    // instances of 'movie' class (objects)


    Gladiator = new Movie("Gladiator", "2000", "2h 51m");
    Armageddon = new Movie("Armageddon", "1998", "2h 33m");
    Terminator = new Movie("Terminator II", "1991", "2h 34m");

    var Logger = function () {
        function Logger() {
            _classCallCheck(this, Logger);
        }

        _createClass(Logger, [{
            key: "log",
            value: function log(info) {
                console.log("The " + info + " event has been emitted");
            }
        }]);

        return Logger;
    }();

    var logger = new Logger();

    Gladiator.on('play', logger.log("'play'"));

    // Exercise 6
    Social = {
        share: function share(friendName) {
            console.log("Share " + Gladiator.name + " with " + friendName);
        },
        like: function like(friendName) {
            console.log("Like " + Gladiator.name + " with " + friendName);
        }
    };

    Object.assign(Gladiator, Social);
    Gladiator.share("Nicolas Farruggia");

    // Exercise 7
    Actor = function Actor(name, age) {
        _classCallCheck(this, Actor);

        this.kind = "Actor";
        this.name = name;
        this.age = age;
    };

    Bruce = new Actor("Bruce Willis", "65");
    otherCast = [new Actor("Ben Affleck", "45"), new Actor("Liv Tyler", "38")];

    // Exercise 8
    Object.assign(Armageddon, Movie);
    Armageddon.addCast(otherCast);
};
