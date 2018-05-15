//EventEmitter class
class EventEmitter{
    constructor(){
        this.event = {};
    }

    //EventPlay = Event added - callback = function added
    on(eventPlay, callback){  
        //If the event exists within the object
        if(this.event[eventPlay]){
                //Evaluate if it is associated with the same function
                if(this.event[eventPlay].indexOf(callback) != -1){
                    console.log('Its already exists');
                }
                //If not, I assigned the new function
                else{
                    this.event[eventPlay].push(callback);
                }
        }          
        else{
            //If not exist, i create the event as an array, and i assigned the function
            this.event[eventPlay] = []
            this.event[eventPlay].push(callback);
        }      
    }

    //Receive the event to be deleted with the function
    off(eventPlay, callback){
        //If the event exist and there are more than one
        if(this.event[eventPlay].length > 1){ 
            //I find the function that corresponds to the event
            let deleteEvent = this.event[eventPlay].indexOf(callback);
            //I eliminated this function.
            this.event[eventPlay].splice(deleteEvent,1);      
        }
        //If the event does not exist
        else if(this.event[eventPlay].length){
            console.log('Unknown event')
        }
        //If the event exist but not more than one, i delete it
        else{
            let deleteEvent = this.event[eventPlay].indexOf(callback);
            this.event[eventPlay].splice(deleteEvent,1);  
            delete this.event[eventPlay];
        }        
    }
    
    //Receive the event that want to emitt
    emit(events) {
        //Assign to the variable the arrangement of events
        let eventsEmitted = this.event[events];
        //If the variable is empty or has no elements
        if (!eventsEmitted || !eventsEmitted.length) {
            console.log('The event is empty');
        }
        //Execute the function with the event I want to emit
        eventsEmitted.forEach((getEvents) => {
            if(!getEvents){
                console.log('The callback does not exist');
            }
            else{
                getEvents(events);
            }
        });
    }
}
