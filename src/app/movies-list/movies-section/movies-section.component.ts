import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { Movie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.css']
})
export class MoviesSectionComponent implements OnInit {

  @Input() order_by!: string;
  @Input() list!: string;
  @Input() genre!: Genre;

  movies: Array<Movie> = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();

  }

  refereshList()
  {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = []
    this.moviesService.getFiltered().subscribe(
      item => this.movies.push(item)
    )
  }

}
