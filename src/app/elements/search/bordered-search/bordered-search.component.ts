import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bordered-search',
  templateUrl: './bordered-search.component.html',
  styleUrls: ['./bordered-search.component.css']
})
export class BorderedSearchComponent implements OnInit {
  focus: boolean = false;
  console = console;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.focus)
  }

}
