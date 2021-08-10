import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Genre } from 'src/app/domain-model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }



  getGenres(): Observable<Genre> {
    return this.httpClient.get('http://localhost:8080/ru/api/genres')
      .pipe(
        mergeMap(item => from(item as any[]))
      )
      .pipe(
        map(item => new Genre(item.id, item.title))
      )
  }

  getGenreByTitle(title: string): Observable<Genre>
  {
    return this.httpClient.get<Genre>(`http://localhost:8080/ru/api/genres/title/${title}`);
  }
}
