import { Component, Input, OnInit } from '@angular/core';
import { BonusesService } from 'src/app/services/bonuses/bonuses.service';

@Component({
  selector: 'app-bonuses-slider',
  templateUrl: './bonuses-slider.component.html',
  styleUrls: ['./bonuses-slider.component.css']
})
export class BonusesSliderComponent implements OnInit {

  sliderConfig = {
    slidesToShow: 4,
    // arrows: true,
    // infinite: false,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       variableWidth: true
    //     }
    //   }
    // ]
  }

  @Input() items: Array<{ img: string }> = [];

  constructor(private bonusesService: BonusesService) { }

  ngOnInit(): void {
    this.bonusesService.getBonuses(10,0).subscribe(
      item => this.items.push(item)
    )
  }

}
