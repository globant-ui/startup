class EventEmitter {

  constructor() {
    this.listeners = new Map();
  }

  addListener(event, callback) {
    if(!this.listeners.has(event)){
      this.listeners.set(event, callback);
    }
  }

  removeListener(event) {
    this.listeners.delete(event);
  }

  on(event, callback) {
    this.addListener(event, callback);
  }

  emit(event, ...args) {
    let listener = this.listeners.get(event);

    listener(...args); // Or we could change it for event instead of args.
  }

  off(event) {
    this.removeListener(event);
  }
}

export default EventEmitter;