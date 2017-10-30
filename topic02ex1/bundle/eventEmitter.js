'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//export class EventEmitter...

module.exports = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventName, callback) {
            if (_typeof(this.events[eventName]) !== 'object') {
                this.events[eventName] = [];
            }

            this.events[eventName].push(callback);
        }
    }, {
        key: 'emit',
        value: function emit(eventName) {
            var listeners,
                length,
                args = [].slice.call(arguments, 1); //converts arguments object to array

            if (_typeof(this.events[eventName]) === 'object') {
                listeners = this.events[eventName].slice();
                length = listeners.length;

                for (var i = 0; i < length; i++) {
                    listeners[i].apply(this, args);
                }
            }
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            var index;

            if (_typeof(this.events[eventName]) === 'object') {
                index = this.events[eventName].indexOf(callback);

                if (index > -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        }
    }]);

    return EventEmitter;
}();