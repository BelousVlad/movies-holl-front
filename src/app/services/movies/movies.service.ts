import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Genre } from 'src/app/domain-model/Genre';
import { IMovie, Movie } from 'src/app/domain-model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) public locale: string, @Inject('api_url') private url: string) {
    
  }

  getFiltered(title: string|null = null, group: string|null = null, genre: Genre|null = null , sort_by: string|null = null, limit: number|null = null, offset: number|null = null ): Observable<IMovie> {
    let params = new HttpParams();

    if(title)
      params = params.append('title', title);
    if(sort_by)
      params = params.append('order_by', sort_by);
    if(genre && genre.id !== -1)
      params = params.append('genre', genre.id);
    if(group)
      params = params.append('vod', group);
    if(offset)
      params = params.append('offset', offset);
    if(limit)
      params = params.append('limit', limit);
    
    return this.http.get(`${this.url}/${this.locale}/movies`, { params })
      .pipe(
        mergeMap((item) => from(item as any[]),
      ))
      .pipe(
        map(item => new Movie(
          item.movie_id,
          item.megogo_id,
          item.title,
          item.country,
          item.poster,
          item.year,
          item.vod,
          item.director,
          item.actors,
          item.imdb,
          item.duraction,
          item.description,
          item.premier_date ? new Date(item.premier_date) : null,
          item.genres,
        ))
      )
  }
  getMovie(id: number): Observable<IMovie>
  {
    return this.http.get(`${this.url}/${this.locale}/movies/${id}` )
      .pipe(
        map((item: any) => 
          new Movie(
            item.movie_id,
            item.megogo_id,
            item.title,
            item.country,
            item.poster,
            item.year,
            item.vod,
            item.director,
            item.actors,
            item.imdb,
            item.duraction,
            item.description,
            item.premier_date ? new Date(item.premier_date) : null,
            item.genres,
            item.gallery,
        ))
      );
  }
  getCount(genre: Genre|null): Observable<any>
  {
    let params = new HttpParams();
    if(genre)
      params = params.append('genre', genre.id);
    
    return this.http.get(`${this.url}/get_max`, { params })
  }
}
