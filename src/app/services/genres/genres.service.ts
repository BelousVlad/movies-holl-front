import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Genre } from 'src/app/domain-model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient, @Inject(LOCALE_ID) public locale: string) { }



  getGenres(): Observable<Genre> {
    return this.httpClient.get(`http://bonus.format-tv.net/api/${this.locale}/genres`)
      .pipe(
        mergeMap(item => from(item as any[]))
      )
      .pipe(
        map(item => new Genre(item.id, item.title))
      )
  }

  getGenreByTitle(title: string): Observable<Genre>
  {
    return this.httpClient.get<Genre>(`http://bonus.format-tv.net/api/${this.locale}/genres/title/${title}`);
  }
}
