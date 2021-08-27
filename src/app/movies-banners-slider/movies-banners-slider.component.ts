import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../domain-model/Movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movies-banners-slider',
  templateUrl: './movies-banners-slider.component.html',
  styleUrls: ['./movies-banners-slider.component.css']
})
export class MoviesBannersSliderComponent implements OnInit {

  @Input() controll_id!: String;

  sliderConfig = {
    slidesToShow: 6,
    arrows: true,
    infinite: false,
    appendArrows: '',
    nextArrow: '',
    prevArrow: '',
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
    this.sliderConfig.appendArrows = `.banners-arrows-container${this.controll_id ? '#'+this.controll_id : ''}`;
    this.sliderConfig.nextArrow =    `.banners-slider-next-arrow${this.controll_id ? '#'+this.controll_id : ''}`;
    this.sliderConfig.prevArrow =    `.banners-slider-prev-arrow${this.controll_id ? '#'+this.controll_id : ''}`;
  }

}
