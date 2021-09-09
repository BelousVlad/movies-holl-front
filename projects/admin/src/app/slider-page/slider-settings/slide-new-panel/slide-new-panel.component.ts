import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISlide } from '../../../domain-model/Slide';
import { SliderService } from '../../../services/slider.service';

@Component({
  selector: 'app-slide-new-panel',
  templateUrl: './slide-new-panel.component.html',
  styleUrls: ['./slide-new-panel.component.css']
})
export class SlideNewPanelComponent implements OnInit {

  @Output() onSaved = new EventEmitter<ISlide>()

  slide: ISlide = {};

  constructor(private sliderService: SliderService) { }

  cancel() {
    this.slide = {};
  }

  ngOnInit(): void {
  }

}
