class EventEmitter {
  constructor () {
    this.listeners = new Object();
  }

  on (event, callback) {
    if(this.listeners[event] != callback) {
      this.listeners[event] = callback
    }
  }

  off (event) {
    if(this.listeners[event]) {
      this.listeners[event] = undefined;
    }
  }

  emit (movie, event) {
    if(this.listeners[event]) {
      this.listeners[event](movie, event);
    }
  }
}
export {EventEmitter}
