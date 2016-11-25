//module eventEmitter.js
class EventEmitter {
  constructor() {
    this.events = [];
  }

  on(event, listener) {
    let eventFound = this.events.find(function(element) {
      if (event === element.name) {
        return element;
      }
    });
    let eventListenersLength;
    if (eventFound) {
      eventFound.listeners.push(listener);
    } else {
      eventListenersLength = this.events.push({ name: event, listeners: [] });
      this.events[eventListenersLength - 1].listeners.push(listener);
    }
  }

  emit(event) {
    let eventFound = this.events.find(function(element) {
      if (event === element.name) {
        return element;
      }
    });
    eventFound.listeners.map(function(listener) {
      listener.call(this, event);
    }, this);
  }

  off(event, listener) {
    let eventFound = this.events.find(function(element) {
      if (event === element.name) {
        return element;
      }
    });
    let listeners;
    if (eventFound) {
      listeners = eventFound.listeners;
      listeners = eventFound.listeners.filter(function(item) {
        if (item !== listener) {
          return item;
        }
      });
      if (!listeners.length) {
        this.events = this.events.filter(function(item) {
          if (eventFound !== item) {
            return item;
          }
        });
      }
    }
  }
}

export { EventEmitter }
