import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, first, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { Genre } from 'src/app/domain-model/Genre';
import { IMovie, Movie, MovieFactory } from 'src/app/domain-model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFiltered(group: string|null = "all", genre: Genre|null = null , sort_by: string|null = null, limit: number|null = null, offset: number|null = null ): Observable<IMovie> {
    const factory = new MovieFactory();

    let params = new HttpParams();

    if(sort_by)
      params = params.append('order_by', sort_by);
    if(genre && genre.id !== -1)
      params = params.append('genre', genre.id);
    if(offset)
      params = params.append('offset', offset);
    if(limit)
      params = params.append('limit', limit);
    
    return this.http.get('http://localhost:8080/api/movies', { params })
      .pipe(
        mergeMap((item) => from(item as any[]),
      ))
      .pipe(
        map(item => factory.createMovie(
          item.movie_id,
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
    const factory = new MovieFactory();

    return this.http.get(`http://localhost:8080/api/movies/${id}` )
      .pipe(
        map((item: any) => 
          factory.createMovie(
            item.movie_id,
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
}
