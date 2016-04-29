class EventEmitter {

  constructor() {
    this.events = {
    }
  }

  on(event, callback){
    this.events[event] = callback
  }

  emit(event){
    this.events[event](event)
  }

  off(event){
    delete this.events[event]
  }
}

export default EventEmitter;
