import { Component, Input, OnInit } from '@angular/core';
import { TagSliderItem } from '../tag-slider-item';

@Component({
  selector: 'app-tag-slide',
  templateUrl: './tag-slide.component.html',
  styleUrls: ['./tag-slide.component.css']
})
export class TagSlideComponent implements OnInit {

  @Input() item!: TagSliderItem;

  constructor() { }

  ngOnInit(): void {
  }

}
