import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/domain-model/Movie';

@Component({
  selector: 'app-autocomplete-movie',
  templateUrl: './autocomplete-movie.component.html',
  styleUrls: ['./autocomplete-movie.component.css']
})
export class AutocompleteMovieComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
