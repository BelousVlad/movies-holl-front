import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SliderService{

  private session!: string

  constructor(private http: HttpClient, @Inject('api_url') private url: string) { }
  
  login(login: string, password: string): Observable<Boolean>{

    const data = new FormData();
    data.append('login', login);
    data.append('password', password);

    return this.http.post(`${this.url}/login`, data).pipe(
      map((response: any) => {
        if(response.session_id)
          this.session = response.session_id;
        return response.ok === 'ok';
      })
    )
  }

  isLogin(): Observable<Boolean> {
    return this.http.get<any>(`${this.url}/is_login`).pipe(
      map(response => response.login)
    )
  }
    
  getSlides(): Observable<any> {
    return this.http.get(`${this.url}/get_slides`)
  }

}
