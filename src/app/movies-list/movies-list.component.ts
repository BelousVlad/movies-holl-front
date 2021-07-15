import { Component, HostListener, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Genre } from '../domain-model/Genre';
import { Movie } from '../domain-model/Movie';
import { GenresService } from '../services/genres/genres.service';
import { MenuItem } from '../services/menus-service/menus.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  lists = [
    { text: 'Все'},
    { text: 'Бесплатные'},
    { text: 'По подписке'},
  ]
  selectedList = this.lists[0];

  genres: Array<Genre> = [new Genre(-1, 'Все жанры')]
  selectedGenre: Genre = this.genres[0];

  sorts: Array<{
    title: string,
    compare: (a: Movie, b: Movie ) => number
  }> = [
    {
      title: 'По имени',
      compare: (a,b) => a.title.localeCompare(b.title)
    },
    {
      title: 'По дате добавления',
      compare: (a,b) => a.title.localeCompare(b.title)
    },
    {
      title: 'По дате выпуска',
      compare: (a,b) => a.title.localeCompare(b.title)
    },

  ]

  selectedSort = this.sorts[0];

  isMobile!: boolean;

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(
      item => this.genres.push(item)
    );
    this.onResize();
  }
  onGenreChanged(event: MatSelectChange)
  {
    //TODO
  }

  @HostListener('window:resize')
  onResize()
  {
    this.isMobile = window.innerWidth < 768;
  }


}