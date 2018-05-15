import EventEmitter from "./EventEmitter.js";

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play(){
        this.emit('play');
    }    
    
    stop(){
        this.emit('stop');
    }

    resume(){
        this.emit('resume');
    }

    addCast(newCast){
        if(Array.isArray(newCast)){
            newCast.forEach((value, index) => {
            this.cast.push(value);
        }) 
        }
        else{
            this.cast.push(newCast);
        }
    }

}

export default Movie;