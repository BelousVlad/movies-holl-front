import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../domain-model/Movie';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css']
})
export class MovieBannerComponent implements OnInit {

  @Input() movie!: Movie

  constructor() { }

  ngOnInit(): void {
  }

}
