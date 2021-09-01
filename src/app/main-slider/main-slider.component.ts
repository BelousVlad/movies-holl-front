import { Component, OnInit } from '@angular/core';
import { SlideItem } from './SlideItem';
import "jquery";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  slides?: Array<SlideItem>;

  useMouseWheel: boolean = true;

  slideConfig = {
    // "slidesToShow": 3,
    // "slidesToScroll": 1,
    // "variableWidth": true

    slidesToShow: 1,
    centerMode: true,
    centerPadding: '160px',
    dots: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '5vw',
          // variableWidth: false,  
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      new SlideItem('../assets/images/banner.png', 'Удивительное путешествие доктора Дулиттла', 'Смотрите 22 000 фильмов','#', 'link_text'),
      new SlideItem('https://format-tv.net/bonus2/uploads/1625486589-item-image-596-uk.png'),
      new SlideItem('https://format-tv.net/bonus2/uploads/old_items/id_403.png'),
      new SlideItem('https://format-tv.net/bonus2/uploads/old_items/id_403.png'),
    ]
  }

}
