import { Component, OnInit } from '@angular/core';
import { Movie } from '../domain-model/Movie';

@Component({
  selector: 'app-movies-banners-slider',
  templateUrl: './movies-banners-slider.component.html',
  styleUrls: ['./movies-banners-slider.component.css']
})
export class MoviesBannersSliderComponent implements OnInit {

  sliderConfig = {
    slidesToShow: 6,
  }
  movies!: Array<Movie>

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      new Movie('test 1','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 2','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 3','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 4','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 5','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 6','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 7','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 8','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 9','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
      new Movie('test 10','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    ]
  }

}
