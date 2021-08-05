import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AutocompleteMovieComponent } from './autocomplete-movie/autocomplete-movie.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}
