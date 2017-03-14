"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        // listeners object will store events as keys and arrays of listeners as values
        this.listeners = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(event, listener) {
            if (this.listeners[event] === undefined) {
                this.listeners[event] = [];
            }
            this.listeners[event].push(listener);
        }
    }, {
        key: "emit",
        value: function emit(event) {
            this.listeners[event].forEach(function (fn) {
                console.log("executing a listener");
                fn.call();
            });
        }
    }, {
        key: "off",
        value: function off(event, listener) {
            if (this.listeners[event] === undefined) {
                console.log("nothing to remove");
            } else {
                var deletedListener = this.listeners[event].pop();
                console.log("deleted", deletedListener);
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
;
