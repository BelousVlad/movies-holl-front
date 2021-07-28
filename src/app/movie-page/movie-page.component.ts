import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../domain-model/Movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie!: Movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'))
    // this.moviesService.getMovie(id)
    //   .subscribe(item => this.movie = item)
  }

}
