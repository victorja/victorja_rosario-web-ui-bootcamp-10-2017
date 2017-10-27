class Movie {

    constructor(name,year,duration){
        this.title = name;
        this.year = year;
        this.duration = duration;
        this.startPlay = 0;
        this.currentMovieTime = 0;
    }
    play(){
        this.startPlay = date.getMinutes();
    }
    pause(){
        let time2 = date.getMinutes();
        this.currentMovieTime+= (time2 - this.startPlay);
        this.startPlay = time2;
        if(this.currentMovieTime > this.duration)
            this.currentMovieTime = this.duration;
    }
    resume(){
        this.startPlay =0;
        this.currentMovieTime=0;
    }
}

class Actor {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class EventEmitter{
    constructor(){
        this.events = {};
    }
    on(eventName,callback){
        if (typeof this.events[eventName] !== 'object') {
            this.events[eventName] = [];
        }
    
        this.events[eventName].push(callback);
    }
    emit(eventName){
        var listeners, length, args = [].slice.call(arguments, 1); //converts arguments object to array
        
            if (typeof this.events[eventName] === 'object') {
                listeners = this.events[eventName].slice();
                length = listeners.length;
        
                for (let i = 0; i < length; i++) {
                    listeners[i].apply(this, args);
                }
            }
    }
    off(eventName,callback){
        var index;
        
            if (typeof this.events[eventName] === 'object') {
                index = this.events[eventName].indexOf(callback);
        
                if (index > -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
    }
}

let date = new Date();
let emitter = new EventEmitter();
let e1 =  () => { console.log('A');};
var e2 =  () => { console.log('B');};

emitter.on('event', e1);
emitter.on('event', e2);
emitter.emit('event');
emitter.off('event',e2);
emitter.emit('event');