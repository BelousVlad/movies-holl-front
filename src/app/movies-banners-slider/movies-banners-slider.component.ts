import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../domain-model/Movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movies-banners-slider',
  templateUrl: './movies-banners-slider.component.html',
  styleUrls: ['./movies-banners-slider.component.css']
})
export class MoviesBannersSliderComponent implements OnInit {

  sliderConfig = {
    slidesToShow: 6,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true
        }
      }
    ]
  }
  @Input() movies!: Array<Movie>

  constructor() { }

  ngOnInit(): void {

  }

}
