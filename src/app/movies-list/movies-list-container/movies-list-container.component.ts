import { Component, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { Movie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { MovieElementComponent } from './movie-element/movie-element.component';

@Component({
  selector: 'app-movies-list-container',
  templateUrl: './movies-list-container.component.html',
  styleUrls: ['./movies-list-container.component.css']
})
export class MoviesListContainerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }
}
