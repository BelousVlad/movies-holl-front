import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { GenresService } from 'src/app/services/genres/genres.service';

@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent implements OnInit {

  constructor(private genresService: GenresService) { }

  sentences: Array<{
    title: string,
    text: string,
    link_text: string,
    href: string,
  }> = [
    {
      title: $localize`Попробуйте бесплатный просмотр фильмов и сериалов`,
      text: $localize`Первые 14 дней подписки`,
      link_text: $localize`Попробовать за 1 грн`,
      href: ``
    },
    {
      title: $localize`Подписка MEGOGO для настоящих киноманов`,
      text: $localize`Более 12 000 фильмов и мультфильмов, сериалы START и MORE TV`,
      link_text: $localize`Смотреть за 129 грн`,
      href: $localize``
    }
  ]

  sliders_genres: Array<Genre> = [];
  genres: Array<Genre> = [];

  add_genre_count = 2;
  genre_current = 0;

  ngOnInit(): void {
    this.genresService.getGenres().subscribe({
      next: item => this.genres.push(item),
      complete: () => {
        this.addGenreSliders(3);
      }
    })
  }

  addGenreSliders(count: number) {
    let i = this.genre_current; 
    for(; i < this.genres.length && i < this.genre_current + count; ++i)
    {
      this.sliders_genres.push(this.genres[i]);
    }
    this.genre_current = i;
  }

  onNextClick() {
    this.addGenreSliders(this.add_genre_count)
  }

}
