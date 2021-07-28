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

  list = [
    new Genre(1,'Боевик'),
    new Genre(2,'Романтика'),
    new Genre(3,'Детектив'),
    new Genre(4,'Комедия'),
    new Genre(5,'Фентези'),
  ]

  getGenres(): Observable<Genre> {
    return this.httpClient.get('http://localhost:8080/api/genres')
      .pipe(
        mergeMap(item => from(item as any[]))
      )
      .pipe(
        map(item => new Genre(item.id, item.title))
      )
  }
}
