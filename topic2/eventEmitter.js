export default class EventEmitter {
    constructor() {
      // listeners object will store events as keys and arrays of listeners as values
      this.listeners = {};
    }
    on(event, listener) {
        if (this.listeners[event] === undefined) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }
    emit(event) {
        this.listeners[event].forEach(function(fn){
            console.log("executing a listener");
            fn.call();
        })
    }
    off(event, listener) {
        if (this.listeners[event] === undefined){
            console.log("nothing to remove");
        }
        else {
            let deletedListener = this.listeners[event].pop();
            console.log("deleted", deletedListener);
        }
    }
};