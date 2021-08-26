import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/domain-model/Movie';

@Component({
  selector: 'app-autocomplete-movie',
  templateUrl: './autocomplete-movie.component.html',
  styleUrls: ['./autocomplete-movie.component.css']
})
export class AutocompleteMovieComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() onNavigate = new EventEmitter();  

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
  }

}
