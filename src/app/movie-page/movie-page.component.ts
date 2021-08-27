import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../domain-model/Movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit, AfterViewInit {

  movie!: Movie;
  frame_preview!: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.moviesService.getMovie(id);
      })
    )
    .subscribe(item => {
        if(item.gallery && item.gallery.length > 0)
          this.frame_preview = item.gallery[0];
        this.movie = item
      }
    )
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0,0])
  }
}
