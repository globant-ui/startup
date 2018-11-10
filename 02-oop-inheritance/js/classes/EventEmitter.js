class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        //the solution because i think should not use de callback as array :O

        this.events[eventName].push(callback);
        //console.log(this.events[eventName]); la funcion guardada en la array
    }

    emit(eventName) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(function (callback) { callback.call(null, eventName); });
        }
    }

    off(eventName, callback) {
        //this.events = {}; if i want to remove all propertys(eventsNames)- all
        const event = this.events[eventName];
        if (event) {
            event.forEach(function (e, index) {
                //event.splice(index, 1); if i want to remove all the elements(callbacks functions)at the array but keep the porperty name(eventName)
                //and finally if i want to remove an specific element(callback) at the array but keep the others callbacks 
                if (e.name == callback.name) {
                    event.splice(index, 1);
                }
            });
        }
    }

}

export default EventEmitter;