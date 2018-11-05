class EventEmitter {
    //methods
    constructor() {
        this.events = {}
    }
    on(envetName, callBack) {
        if (this.event[eventName].push(callback)) {} else {
            this.events[envetName] = [callback]
        }
    }
    emit(eventname) {
        if(this.event[eventName]){
            this.events[key].forEach(callBack => {
                callBack(eventName)
            });
        }
    }
    off(eventName, callBack) {
        if(this.events[eventName]){
            delete this.events[eventName]
        }
    }
    class Movie extends EventEmitter{

        constructor(name,year,duration){
            this.name = name;
            this.year = year;
            this.duration = duration;
        }
        play(){
            return `Playing movie...${this.name}`
        
        }
        pause(){
    
        }
        resume(){
    
        }
        addCast(cast){
    
        }
    }
    
    const movie1 = new Movie('terminator I',1985,60);
    const movie2 = new Movie('terminator II',1991,68)
    
    console.log(movie1.play()); 
    console.log(movie2.play()); 

}