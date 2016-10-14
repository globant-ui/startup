function createMovie(title, year, duration){
   class movieClass {
     constructor (title, year, duration){
       this.title=title;
       this.year=year;
       this.duration=duration;
     }
     
     showTitle(){
       console.log(this.title);
     }

     showDuration(){
       console.log(this.duration);
     }

     showYear(){
       console.log(this.year);
     }

   }

   let movie = new movieClass (title, year, duration);

   movie.showTitle();
   movie.showYear();
   movie.showDuration();

}
