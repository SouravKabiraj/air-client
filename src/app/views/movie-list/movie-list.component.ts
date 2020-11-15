import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie..model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor() {
    this.movies = [
      new Movie("001", "War", "./../../../../thumbnails/war.jpg"),
      new Movie("002", "Skyfall", "./../../../../thumbnails/war.jpg")
    ];
  }

  ngOnInit(): void {
  }

}
