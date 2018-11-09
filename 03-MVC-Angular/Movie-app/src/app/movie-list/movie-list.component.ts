import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  editShow = false;
  constructor() { }
  movieList: Movies[] = [
    { id: 1, title: 'Avenger I', year: 2012, duration: 120 },
    { id: 2, title: 'Avenger II', year: 2015, duration: 120 },
    { id: 3, title: 'Avenger III', year: 2018, duration: 120 }
  ];

  selectedMovie: Movies = new Movies();
  editedMovie: Movies = new Movies();

  addNew() {
    this.selectedMovie.id = this.movieList.length + 1;
    this.movieList.push(this.selectedMovie);
    this.selectedMovie = new Movies();
  }
  openEdit(movie: Movies) {
    this.editShow = true;
    movie.title = this.editedMovie.title;
    movie.year = this.editedMovie.year;
    movie.duration = this.editedMovie.duration;

  }
  confirmEdit() {
    this.editShow = false;

  }
  delete(movie: Movies) {
    this.movieList = this.movieList.filter(x => x !== this.selectedMovie);
    this.selectedMovie = new Movies();
  }

  ngOnInit() {
  }

}
