import { Component, Input, OnInit } from '@angular/core';
import { IMovie, Movie } from 'src/app/domain-model/Movie';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.css']
})
export class MovieElementComponent implements OnInit {

  @Input() movie!: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
