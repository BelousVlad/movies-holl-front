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
    // infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
