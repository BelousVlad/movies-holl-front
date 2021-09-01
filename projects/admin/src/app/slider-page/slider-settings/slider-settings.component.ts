import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-slider-settings',
  templateUrl: './slider-settings.component.html',
  styleUrls: ['./slider-settings.component.css']
})
export class SliderSettingsComponent implements OnInit {

  slides!: Array<any>;

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.getSlides().subscribe(
      items => this.slides = items
    )
  }

}
