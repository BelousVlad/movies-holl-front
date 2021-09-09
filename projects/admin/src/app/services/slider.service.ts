import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISlide } from '../domain-model/Slide';

@Injectable({
  providedIn: 'root'
})
export class SliderService{

  private session!: string

  constructor(private http: HttpClient, @Inject('api_url') private url: string) { }
  
  login(login: string, password: string): Observable<boolean> {

    const data = new FormData();
    data.append('login', login);
    data.append('password', password);

    return this.http.post(`${this.url}/login`, data).pipe(
      map((response: any) => response.ok === 'ok')
    )
  }

  isLogin(): Observable<boolean> {
    return this.http.get<any>(`${this.url}/is_login`).pipe(
      map(response => response.login)
    )
  }
    
  getSlides(): Observable<Array<ISlide>> {
    return this.http.get<Array<ISlide>>(`${this.url}/get_slides`).pipe(
      map(arr => arr.map(slide => {
        slide.image = `${this.url}/image_slide/${slide.image}`;
        return slide;
      }))
    )
  }

  saveSlide(slide: ISlide): Observable<boolean> {
    const data = new FormData();
    const obj = {
      'title': slide.title,
      'note': slide.note,
      'link': slide.link,
      'link_text': slide.link_text,
      'slide_id': slide.slide_id,
    }
    data.append('slide', JSON.stringify(obj));

    if(slide.image)
      data.append('image', slide.image);
    
    return this.http.post(`${this.url}/save_slide`, data).pipe(
      map((response: any) => response.ok)
    )
  }

  removeSlide(slide_id: number): Observable<boolean> {
    const data = new FormData();
    data.append('slide_id', String(slide_id));
    return this.http.post(`${this.url}/remove_slide`, data).pipe(
      map((response: any) => response.ok)
    )
  }

}
