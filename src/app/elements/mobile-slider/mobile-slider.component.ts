import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-mobile-slider',
  templateUrl: './mobile-slider.component.html',
  styleUrls: ['./mobile-slider.component.css'],
  providers: [SlickCarouselComponent]
})
export class MobileSliderComponent<T extends {title: string}> implements OnInit {

  @Input() items!: Array<T>

  @Output() selectedChange = new EventEmitter<T>();
  @Input() selected!: T;

  sliderConfig = {
    variableWidth: true,
    infinite: false,
    arrows: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(item: T) {
    this.selected = item;
    this.selectedChange.emit(item);
  }
}
