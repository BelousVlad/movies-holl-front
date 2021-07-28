import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { IMovie, Movie } from 'src/app/domain-model/Movie';
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

  movies: Array<IMovie> = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.loadMovies();

  }

  refereshList()
  {
    // console.log(this.moviesService);
    this.loadMovies();
  }

  loadMovies() {
    this.movies = []
    this.moviesService.getFiltered(this.list, this.genre, this.order_by, 40 )
    .subscribe(item => {
        this.movies.push(item)
      });

  }

}
