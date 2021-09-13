import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SlideItem } from 'src/app/main-slider/SlideItem';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(private http: HttpClient, @Inject('api_url') public url: String) {
    this.url = '/api/slider';
  }

  getSlides(): Observable<Array<SlideItem>> {///slider
    return this.http.get<Array<SlideItem>>(`${this.url}/get_slides`).pipe(
      map(arr => arr.map(slide => {
        if(slide.image)
          slide.image = `${this.url}/image_slide/${slide.image}`;
        return slide;
      }))
    )
  }
}
