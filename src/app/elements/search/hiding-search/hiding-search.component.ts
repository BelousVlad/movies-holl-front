import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { SearchComponent } from '../search.component';

@Component({
  selector: 'app-hiding-search',
  templateUrl: './hiding-search.component.html',
  styleUrls: ['./hiding-search.component.css']
})
export class HidingSearchComponent extends SearchComponent implements OnInit {

  constructor(moviesService: MoviesService) {
    super(moviesService)
  }

  ngOnInit(): void {
  }

}
