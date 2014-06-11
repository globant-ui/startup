define('js/movie', function(){   
    var Movie= function() {
        var attributes = new Hashmap();
        var observers = [];
        var actors = [];

        console.log("new movie");
        this.set = function (key,value) {
          attributes.setItem(key,value);
        };
        this.get = function (key) {
          return attributes.getItem(key);
        };
        this.play = function () {          
          this.notifyObservers("play "+ this.get("title"));
        };
        this.stop = function () {          
          this.notifyObservers("stop "+ this.get("title"));
        };
        this.addObserver= function(observer) {
          observers.push(observer);
          //console.log("observer added in "+ this.get("title"));
          this.notifyObservers("observer added in "+ this.get("title"));
        };
        this.removeObserver= function(observer) {
          var index = this.observers.indexOf(observer)
          if (~index) {
            this.observers.splice(index, 1)
          }
        };
        this.notifyObservers= function(message) {
          for (var i = observers.length - 1; i >= 0; i--) {
            observers[i].update(message);
          };
        }
        this.addActor= function(actor){
          actors.push(actor);
          this.notifyObservers("added "+ actor.get("name")+ " in "+ this.get("title"));
        }
      }  
    return {
        Movie: new Movie()
    };
});