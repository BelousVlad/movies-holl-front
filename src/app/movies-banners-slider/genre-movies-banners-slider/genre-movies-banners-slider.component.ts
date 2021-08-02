import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { Movie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-genre-movies-banners-slider',
  templateUrl: './genre-movies-banners-slider.component.html',
  styleUrls: ['./genre-movies-banners-slider.component.css']
})
export class GenreMoviesBannersSliderComponent implements OnInit {

  @Input() genre!: Genre;
  movies: Array<Movie> = [];

  constructor(private movieSevice: MoviesService) { }

  ngOnInit(): void {
    this.movieSevice.getFiltered(null, this.genre).subscribe(
      item => this.movies.push(item)
    )
  }

}
