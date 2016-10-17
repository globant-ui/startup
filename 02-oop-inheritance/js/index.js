class Movie {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() { }

  pause() { }

  resume() { }
}

//---TESTING MOVIE CLASS---
let inception = new Movie("Inception", 2010, 148);
let terminator = new Movie('Terminator', 1984, 90);
console.log(inception instanceof Movie);
console.log(inception instanceof Object);

console.log(typeof Movie);
console.log(typeof Movie.prototype.play);

console.log(inception.title);
console.log(terminator.title);
//---  ---

class EventEmitter {
  constructor() {
    this.events = [];
  }

  on(event, listener) {
    let eventFound = this.events.find(function(element) {
      if (event === element.name) return element;
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
      if (event === element.name) return element;
    });
    eventFound.listeners.map(function(listener) {
      listener.call();
    });
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

//---TESTING EVENTEMITTER CLASS---
function hello() {
  alert("Hello");
}

let eventEmitter = new EventEmitter();
eventEmitter.on("exampleEvent", hello);

setTimeout(function() {
  eventEmitter.emit("exampleEvent");
  eventEmitter.off("exampleEvent", hello);
}, 3000);
//---  ---
