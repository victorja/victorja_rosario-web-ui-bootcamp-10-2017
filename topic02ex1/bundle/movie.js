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