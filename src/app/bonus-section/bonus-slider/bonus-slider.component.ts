import { Component, Input, OnInit } from '@angular/core';
import { IBonus } from 'src/app/domain-model/Bonus/Bonus';

@Component({
  selector: 'app-bonus-slider',
  templateUrl: './bonus-slider.component.html',
  styleUrls: ['./bonus-slider.component.css']
})
export class BonusSliderComponent implements OnInit {

  @Input() bonuses!: Array<IBonus>;
  sliderConfig = {
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 4,
    appendArrows: '.bonus-arrows-container',
    nextArrow: '.bonus-slider-next-arrow',
    prevArrow: '.bonus-slider-prev-arrow',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
          slidesToScroll: 1,
        }
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
