class EventEmitter{

    constructor(){
        this.events = {}
    }

    on(eventName, callback){
         if (this.events[eventName]){
            this.events[eventName].push(callback)
        }else{
            this.events[eventName] = [callback]
        }
    }
    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => {
                callback(eventName)
            })
        }
    }   
    off(eventName){
        if (this.events[eventName]){
            delete this.events[eventName]    
        }
    }
}