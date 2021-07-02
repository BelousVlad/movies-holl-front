import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-right',
  templateUrl: './arrow-right.component.html',
  styleUrls: ['./arrow-right.component.css']
})
export class ArrowRightComponent implements OnInit {

  hover: boolean = false
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
