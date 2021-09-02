import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { GenresService } from '../services/genres/genres.service';
import { Genre } from '../domain-model/Genre';

@Component({
  selector: 'app-tag-slider',
  templateUrl: './tag-slider.component.html',
  styleUrls: ['./tag-slider.component.css']
})
export class TagSliderComponent implements OnInit {
  slides: Array<Genre> = [];
  sliderConfig = {
    slidesToShow: 4,
    // centerMode: true,
    dots: false,
    appendArrows: '.tag-arrows-container',
    initialSlide: 0,
    // centerPadding: '40px'
    // variableWidth: true
    nextArrow: '.tag-slider-next-arrow',
    prevArrow: '.tag-slider-prev-arrow',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  left_arrow_icon = faChevronLeft
  right_arrow_icon = faChevronRight

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres()
    .subscribe(
      item => this.slides.push(item),
    )
  }
}
