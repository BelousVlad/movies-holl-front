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
    
  }

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      new TagSliderItem('lorem', ''),
      new TagSliderItem('lorem', ''),
      new TagSliderItem('lorem', ''),
      new TagSliderItem('lorem', '')
    ];
  }

}
