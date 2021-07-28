import { Component, Input, OnInit } from '@angular/core';
import { IMovie, Movie } from '../../domain-model/Movie';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css']
})
export class MovieBannerComponent implements OnInit {

  @Input() movie!: IMovie

  constructor() { }

  ngOnInit(): void {
  }

}
