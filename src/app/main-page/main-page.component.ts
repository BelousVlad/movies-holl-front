import { Component, OnInit } from '@angular/core';
import { Movie } from '../domain-model/Movie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  movies!: Array<Movie>

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      new Movie('test 1','', new Date()),
      new Movie('test 2','', new Date()),
      new Movie('test 3','', new Date()),
      new Movie('test 4','', new Date()),
      new Movie('test 5','', new Date()),
      new Movie('test 6','', new Date()),
      new Movie('test 7','', new Date()),
      new Movie('test 8','', new Date()),
      new Movie('test 9','', new Date()),
      new Movie('test 10','', new Date()),
    ]
  }

}
