import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  autocomlete_active: boolean = false;

  constructor(protected moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  applyFilter(val: string)
  {
    this.movies.splice(0,this.movies.length);
    if (val !== '')
    {
      this.moviesService.getFiltered(this.search_text).subscribe(item => {
          this.movies.push(item)
        }
      )
    }
  }

  @HostListener('document:click')
  disableAutocomplete()
  {
    this.autocomlete_active = false;
  }
  @HostListener('click', ['$event'])
  enableAutocomplete(event: MouseEvent)
  {
    this.autocomlete_active = true;
    event.stopPropagation();
  }
}
