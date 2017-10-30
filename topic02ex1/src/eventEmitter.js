//export class EventEmitter...

module.exports = class EventEmitter{
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