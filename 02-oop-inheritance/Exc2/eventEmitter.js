import { Logger } from "./logger";

export class EventEmitter extends Logger {
    constructor() {
        super();
        this.events = [];
    }

    on(eventName, callback) { // 'on' is used to add a callback function that’s going to be executed when the event is triggered || Eventname = play, pause, resume.
        // 'EventName' is a string and 'callback' is a function
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }
    emit(eventName) { // emit is used to trigger an event
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                this.log(eventName);
                cb();
            });
        }

    }
    off(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].splice(this.events[eventName], this.events[eventName].length);
        }
    }
}