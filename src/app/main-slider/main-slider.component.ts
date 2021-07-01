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
    variableWidth: true
};

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      new SlideItem('https://lh3.googleusercontent.com/proxy/uRyfKomjLP3-Rmw2ZE2kGgxXriztjNREr1lRzRFaz-Dq4aJBBrdzuLWll3P7uVtm1sT7y6awHljpf4j37vdX70LhUnr-o8KYfg'),
      new SlideItem('https://format-tv.net/bonus2/uploads/old_items/id_403.png'),
      new SlideItem('https://format-tv.net/bonus2/uploads/old_items/id_403.png'),
      new SlideItem('https://format-tv.net/bonus2/uploads/old_items/id_403.png'),
    ]
  }

}