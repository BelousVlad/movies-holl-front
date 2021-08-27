import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Bonus, IBonus } from 'src/app/domain-model/Bonus/Bonus';

@Injectable({
  providedIn: 'root'
})
export class BonusesService {

  constructor(private http: HttpClient) { }

  getBonuses(limit: number|null = null, offset: number| null = null): Observable<IBonus>
  {
    let data = new FormData();
    
    if(limit) 
    {
      data.append('limit', limit.toString());
    }
    if(offset)
    {
      data.append('offset', offset.toString());
    }

    return this.http.post('https://format-tv.net/bonus2/items/get_items', data).pipe(
      mergeMap(items => from(items as any[]))
    ).pipe(
      map((item: any) => 
        new Bonus(item.img)
      )
    );
  }
}
