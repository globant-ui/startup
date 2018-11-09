import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }
  movieList: Movies[] = [
    { id: 1, title: 'Avenger I', year: 2012, duration: 120},
    { id: 2, title: 'Avenger II', year: 2015, duration: 120},
    { id: 3 , title: 'Avenger III', year: 2018, duration: 120}
  ];

  selectedMovie: Movies = new Movies();

  addNew() {
    this.selectedMovie.id = this.movieList.length + 1;
    this.movieList.push(this.selectedMovie);
  }

  ngOnInit() {
  }

}
