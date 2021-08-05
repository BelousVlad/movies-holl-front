import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../domain-model/Movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie!: Movie;
  frame_preview!: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.moviesService.getMovie(id);
      })
    )
    .subscribe(item => {
      console.log(item)
        if(item.gallery && item.gallery.length > 0)
          this.frame_preview = item.gallery[0];
        this.movie = item
      }
    )
  }
}
