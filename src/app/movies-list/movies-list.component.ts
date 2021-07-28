import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSelectChange } from '@angular/material/select';
import { delay, first, timeout } from 'rxjs/operators';
import { Genre } from '../domain-model/Genre';
import { Movie } from '../domain-model/Movie';
import { GenresService } from '../services/genres/genres.service';
import { MenuItem } from '../services/menus-service/menus.service';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { MoviesSectionComponent } from './movies-section/movies-section.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, AfterViewInit {


  lists = [
    { text: 'Все'},
    { text: 'Бесплатные'},
    { text: 'По подписке'},
  ]
  selectedList = this.lists[0];

  genres: Array<Genre> = [new Genre(-1, 'Все жанры')]
  selectedGenre: Genre = this.genres[0];

  sorts: Array<{
    title: string,
    sort_by: string
  }> = [
    {
      title: 'По имени',
      sort_by: 'title'
    },
    {
      title: 'По дате добавления',
      sort_by: 'id'
    },
    {
      title: 'По дате выпуска',
      sort_by: 'premier_date'
    },

  ]

  selectedSort = this.sorts[0];

  isMobile!: boolean;

  @ViewChild('mobile_filters') mobile_filters!: TemplateRef<any>;
  @ViewChild(MoviesSectionComponent) movies_section!: MoviesSectionComponent;

  constructor(private genresService: GenresService, private sidenavService: SidenavService) { }
  
  ngOnInit(): void {
    this.genresService.getGenres().subscribe(
      item => this.genres.push(item)
    );
    // this.movies_section.list = this.selectedList.;
    
  }
  
  ngAfterViewInit(): void {
    this.onResize();
    this.movies_section.genre = this.selectedGenre;
    this.movies_section.order_by = this.selectedSort.sort_by;
    this.movies_section.refereshList();

  }

  onGenreChanged(event: MatSelectChange)
  {
    // console.log(this.selectedGenre)
    this.movies_section.genre = this.selectedGenre
    this.movies_section.refereshList();
  }
  onSortChange(event: MatButtonToggleChange)
  {
    this.selectedSort = event.value;
    this.movies_section.order_by = this.selectedSort.sort_by;
    this.movies_section.refereshList();
  }
  onListChange(event: MatButtonToggleChange)
  {
    //TODO
  }

  openMobileFilters()
  {
    this.sidenavService.setTemplate(this.mobile_filters);
    this.sidenavService.setActive();
    this.sidenavService.getStateObserver().pipe(first(), delay(100)).subscribe(
      state => {
        if(!state)
          this.sidenavService.popTemplate();
      }
    )
  }

  @HostListener('window:resize')
  onResize()
  {
    let tempIsMobile = this.isMobile
    this.isMobile = window.innerWidth < 768;
    if(this.isMobile != tempIsMobile)
    {
      
    }

  }


}