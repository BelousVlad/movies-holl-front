import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { SearchComponent } from '../search.component';

@Component({
  selector: 'app-hiding-search',
  templateUrl: './hiding-search.component.html',
  styleUrls: ['./hiding-search.component.css']
})
export class HidingSearchComponent implements OnInit {

  @Output() hideChange = new EventEmitter<boolean>();
  @Input() hide: boolean = false;

  ngOnInit(): void {
  }

  onClick()
  {
    this.hide = !this.hide;
    this.hideChange.emit(this.hide);
  }

}
