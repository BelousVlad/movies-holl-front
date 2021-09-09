import { EventEmitter } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ISlide } from '../../../domain-model/Slide';
import { SliderService } from '../../../services/slider.service';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.css']
})
export class SlidePanelComponent implements OnInit {

  @Input() slide!: ISlide;

  @Output() onSaved = new EventEmitter<ISlide>();
  @Output() onCanceled = new EventEmitter();
  @Output() onRemoved = new EventEmitter();

  @ViewChild('file_input') input!: ElementRef<HTMLInputElement>
  fileReader = new FileReader();
  loaded_img: any;

  constructor(private sliderService: SliderService) {
    this.fileReader.onload = (res) => this.__load(res);
  }

  onLoadImage(event: any) {
    const file = this.input.nativeElement.files?.item(0);
    this.slide.image = file;
    this.fileReader.readAsDataURL(file as Blob);
  }

  private __load(event: ProgressEvent) {
    this.loaded_img = this.fileReader.result;
  }

  onSave() {
    this.sliderService.saveSlide(this.slide).subscribe(
      (is) => {
        if(is)
          this.onSaved.emit(this.slide)
      }
    )
  }

  onCancel() {
    this.onCanceled.emit();
  }

  onRemove() {
    if(this.slide.slide_id)
      this.sliderService.removeSlide(this.slide.slide_id).subscribe(
        is => {
          this.onRemoved.emit()
        }
      )
  }

  ngOnInit(): void {
  }

}
