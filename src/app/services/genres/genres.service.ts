import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Genre } from 'src/app/domain-model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  list = [
    new Genre(1,'Боевик'),
    new Genre(2,'Романтика'),
    new Genre(3,'Детектив'),
    new Genre(4,'Комедия'),
    new Genre(5,'Фентези'),
  ]

  getGenres(): Observable<Genre> {
    return from(this.list);
  }
}
