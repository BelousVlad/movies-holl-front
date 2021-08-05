import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header-search',
  templateUrl: './mobile-header-search.component.html',
  styleUrls: ['./mobile-header-search.component.css']
})
export class MobileHeaderSearchComponent implements OnInit {
  mobile_nav_search_active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
