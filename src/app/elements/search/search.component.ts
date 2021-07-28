import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_text!: string
  movies: Array<Movie> = []

  constructor(protected moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  applyFilter(val: string)
  {
    this.movies.splice(0,this.movies.length);
    // this.moviesService.getFiltered(val).subscribe(
    //   item => this.movies.push(item)
    // )
  }
}
