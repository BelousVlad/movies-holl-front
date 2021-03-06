import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Genre } from 'src/app/domain-model/Genre';
import { IMovie } from 'src/app/domain-model/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.css']
})
export class MoviesSectionComponent implements OnInit {

  @Input() order_by!: string;
  @Input() list!: string;
  @Input() genre!: Genre;

  page: number = 0;
  limit: number = 42;
  max_items!: number;

  movies: Array<IMovie> = []

  @ViewChild('top_controll') top_controll!: ElementRef;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    
  }

  prevPage()
  {
    if (this.page > 0)
    {
      this.page--;
      this.refereshList();
    }
    this.navigate_top_controll()
  }
  nextPage()
  {
    if(this.page < this.max_pages-1)
    {
      this.page++;
      this.refereshList();
    }
    this.navigate_top_controll()
  }

  private navigate_top_controll() {
    this.top_controll.nativeElement.scrollIntoView();
  }

  get max_pages()
  {
    return Math.ceil(this.max_items / this.limit);
  }

  refereshList()
  {
    this.loadCount();
    this.loadMovies();
  }

  private loadCount()
  {
    this.moviesService.getCount(this.genre.id == -1 ? null: this.genre)
    .subscribe(
      item =>
        this.max_items = item
    )
  }

  loadMovies() {
    this.movies = []
    this.moviesService.getFiltered(null, this.list, this.genre, this.order_by, this.limit, this.limit*this.page )
    .subscribe(item => {
        this.movies.push(item)
      });

  }

}
