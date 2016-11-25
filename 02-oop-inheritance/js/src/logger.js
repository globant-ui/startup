//module logger.js
class Logger {
  constructor() {

  }

  log(info) {
    console.log(`The ${info} event has been emitted for movie ${this.title}`);
  }
}

export { Logger };
