//import {EventEmitter} from "./eventEmitter.js"
var EventEmitter = require("./eventEmitter.js");
var Actor = require("./actor.js");

module.exports = class Movie extends EventEmitter {
    
        constructor(name,year,duration){
            super();//invokes father class constructor
            this.title = name;
            this.year = year;
            this.duration = duration;
            this.startPlay = 0;
            this.currentMovieTime = 0;
            this.cast = [];
        }
        play(){
            var date = new Date();
            this.startPlay = date.getMinutes();
            this.emit('play','playing');//second arg for optional logger obj(see logger.js)
        }
        pause(){
            var date = new Date(); 
            let time2 = date.getMinutes();
            this.currentMovieTime+= (time2 - this.startPlay);
            this.startPlay = time2;
            if(this.currentMovieTime > this.duration)
                this.currentMovieTime = this.duration;

            this.emit('pause','movie paused');
        }
        resume(){
            this.startPlay =0;
            this.currentMovieTime=0;
            this.emit('resume','movie back to minute 0');
        }
        addCast(cast){
            if(typeof cast[Symbol.iterator] === 'function' ){//if is an iterable(ex:array)
                for (let obj of cast){
                    if(obj instanceof Actor) {this.cast.push(obj)};//if is actor, push it
                }   
            }else if(cast instanceof Actor){//just 1 actor(cast)
                this.cast.push(cast);
            }
        }
    }
    /*use EXAMPLE
    let film = new Movie("Harry Potter",2001,120);
    film.play();
    film.on('play',function(){console.log("PLAYING")});//if you declare an event, it triggers automatically if
    //it has the same name of the method
    film.play();*/