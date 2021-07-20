import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Genre } from 'src/app/domain-model/Genre';
import { Movie } from 'src/app/domain-model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  movies = [
    new Movie('test 1','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 2','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 3','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 4','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 5','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 6','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 7','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 8','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 9','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
    new Movie('test 10','https://s1.vcdn.biz/static/f/3056538781/image.jpg/pt/r193x272x4', new Date()),
  ]

  getFiltered(group: string|null = "all", genre: Genre|null = null , sort_by: string|null = null ): Observable<Movie> {
    return from(this.movies);
  }
}
