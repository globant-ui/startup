class Movie extends EventEmitter{
  constructor(title, year, duration) {
    super()
    this.title = title
    this.year = year
    this.duration = duration
    this.cast = []
  }


  play(){
    this.emit("play")
  }

  pause(){
    this.emit("pause")
  }

  resume(){
    this.emit("resume")
  }

  addCast(cast){
    let self = this
    if(Array.isArray(cast)){
      cast.forEach(function(actor){
        self.cast.push(actor)
      })
    }else{
      this.cast.push(cast)
    }
  }
}


export default Movie;
