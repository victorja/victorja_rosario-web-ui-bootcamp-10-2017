(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log() {
            for (var _len = arguments.length, infoArr = Array(_len), _key = 0; _key < _len; _key++) {
                infoArr[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = infoArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var variable = _step.value;

                    console.log(variable);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Logger;
}();
},{}],4:[function(require,module,exports){
"use strict";

var Movie = require("./movie.js");
var Actor = require("./actor.js");
var Logger = require("./logger.js");

var film = new Movie("Harry Potter", 2001, 120);
film.play();
var logger = new Logger();
film.on('play', logger.log); //if you declare an event, it triggers automatically if
//it has the same name of the method
film.on('pause', logger.log);
film.pause();
film.play();

var Dumbledore = new Actor("Albus D.", 88);

var actors = [new Actor("Dobby", 33), new Actor("EL colo", 19), new Actor("El peluca", 55)];

film.addCast(Dumbledore);
film.addCast(actors);
console.log(film.cast);

//ex 5 object called social
var Social = {
    share: function share(friendName) {
        console.log(friendName + " shares " + film.title);
    },
    like: function like(friendName) {
        console.log(friendName + " likes " + film.title);
    }
};
Object.assign(film, Social); //mixin, film mixes in with social
film.like("Victor");
},{"./actor.js":1,"./logger.js":3,"./movie.js":5}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {EventEmitter} from "./eventEmitter.js"
var EventEmitter = require("./eventEmitter.js");
var Actor = require("./actor.js");

module.exports = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(name, year, duration) {
        _classCallCheck(this, Movie);

        //invokes father class constructor
        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = name;
        _this.year = year;
        _this.duration = duration;
        _this.startPlay = 0;
        _this.currentMovieTime = 0;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: "play",
        value: function play() {
            var date = new Date();
            this.startPlay = date.getMinutes();
            this.emit('play', 'playing'); //second arg for optional logger obj(see logger.js)
        }
    }, {
        key: "pause",
        value: function pause() {
            var date = new Date();
            var time2 = date.getMinutes();
            this.currentMovieTime += time2 - this.startPlay;
            this.startPlay = time2;
            if (this.currentMovieTime > this.duration) this.currentMovieTime = this.duration;

            this.emit('pause', 'movie paused');
        }
    }, {
        key: "resume",
        value: function resume() {
            this.startPlay = 0;
            this.currentMovieTime = 0;
            this.emit('resume', 'movie back to minute 0');
        }
    }, {
        key: "addCast",
        value: function addCast(cast) {
            if (typeof cast[Symbol.iterator] === 'function') {
                //if is an iterable(ex:array)
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = cast[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var obj = _step.value;

                        if (obj instanceof Actor) {
                            this.cast.push(obj);
                        }; //if is actor, push it
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else if (cast instanceof Actor) {
                //just 1 actor(cast)
                this.cast.push(cast);
            }
        }
    }]);

    return Movie;
}(EventEmitter);
/*use EXAMPLE
let film = new Movie("Harry Potter",2001,120);
film.play();
film.on('play',function(){console.log("PLAYING")});//if you declare an event, it triggers automatically if
//it has the same name of the method
film.play();*/
},{"./actor.js":1,"./eventEmitter.js":2}]},{},[4]);
