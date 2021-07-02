import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.html',
  styleUrls: ['./arrow-left.component.css']
})
export class ArrowLeftComponent implements OnInit {

  hover: boolean = false;

  constructor() { }

  mouseEnter()
  {
    this.hover = true;
  }

  mouseLeave()
  {
    this.hover = false;
  }

  ngOnInit(): void {
  }

}
