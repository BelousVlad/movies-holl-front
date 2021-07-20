import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-slider-item',
  templateUrl: './mobile-slider-item.component.html',
  styleUrls: ['./mobile-slider-item.component.css']
})
export class MobileSliderItemComponent implements OnInit {

  @Input() selected!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selected)
  }

}
