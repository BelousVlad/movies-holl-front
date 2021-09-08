import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISlide } from '../../domain-model/Slide';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-slider-settings',
  templateUrl: './slider-settings.component.html',
  styleUrls: ['./slider-settings.component.css']
})
export class SliderSettingsComponent implements OnInit {

  slides!: Array<ISlide>;

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.getSlides().subscribe(
      items => this.slides = items
    )
  }

}
