import { Component, OnInit } from '@angular/core';
import { TagSliderItem } from './tag-slider-item';

@Component({
  selector: 'app-tag-slider',
  templateUrl: './tag-slider.component.html',
  styleUrls: ['./tag-slider.component.css']
})
export class TagSliderComponent implements OnInit {
  slides!: Array<TagSliderItem>;
  sliderConfig = {
    slidesToShow: 4,
    // centerMode: true,
    dots: false,
    appendArrows: '.arrows-container',
    initialSlide: 0,
    // centerPadding: '40px'
    // variableWidth: true
  }

  constructor() { }

  ngOnInit(): void {  
    this.slides = [
      new TagSliderItem('lorem1', ''),
      new TagSliderItem('lorem2', ''),
      new TagSliderItem('lorem3', ''),
      new TagSliderItem('lorem4', ''),
      new TagSliderItem('lorem5', ''),
      new TagSliderItem('lorem6', ''),
      new TagSliderItem('lorem7', ''),
    ];
  }

}
