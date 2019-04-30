
class Movie {

    constructor(title,year,duration,state){
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.state = state;
    }

    play(){
        this.state = "playing";
    }

    pause(){
        this.state= "paused";
    }

    resume(){
        this.state="resume";
    }

}


class Actor {

    constructor(name,age){        
        this.name = name;
        this.age = age;
    }


}


class EventEmitter {
    
    
}