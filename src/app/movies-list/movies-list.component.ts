import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  swichItems: Array<{text: string}> = [
    { text: 'test'},
    { text: 'test'},
    { text: 'test'},
    { text: 'test'},
    { text: 'test'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
