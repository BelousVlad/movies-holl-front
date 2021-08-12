import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonusesService {

  constructor(private http: HttpClient) { }

  getBonuses(limit: number|null = null, offset: number| null = null): Observable<{img: string}>
  {
    let params = new HttpParams();

    if(limit) 
    {
      params = params.append('limit', limit);
    }
    if(offset)
    {
      params = params.append('offset', offset);
    }

    return this.http.post<{img: string}>('https://format-tv.net/bonus/items/get_items', { params });
  }
}
