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

  sliders_genres: Array<Genre> = [];

  ngOnInit(): void {
    this.genresService.getGenreByTitle('Комедии').subscribe(
      item => this.sliders_genres.push(item)
    );
    this.genresService.getGenreByTitle('Драмы').subscribe(
      item => this.sliders_genres.push(item)
    );
    this.genresService.getGenreByTitle('Детективы').subscribe(
      item => this.sliders_genres.push(item)
    );
  }

}
