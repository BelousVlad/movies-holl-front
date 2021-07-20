import { Component, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { Movie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { MovieElementComponent } from './movie-element/movie-element.component';

@Component({
  selector: 'app-movies-list-container',
  templateUrl: './movies-list-container.component.html',
  styleUrls: ['./movies-list-container.component.css']
})
export class MoviesListContainerComponent implements OnInit {

  @Input() genre!: Genre
  @Input() sort_by!: string
  @Input('list') group!: string //группа: Все, По подписке, Бесплатные

  movies: Array<Movie> = []

  @ViewChild(MovieElementComponent) elements!: QueryList<MovieElementComponent>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    
  }

  loadMovies()
  {
    this.movies = [];
    this.moviesService.getFiltered(this.group, this.genre, this.sort_by ).subscribe();
  }
}
