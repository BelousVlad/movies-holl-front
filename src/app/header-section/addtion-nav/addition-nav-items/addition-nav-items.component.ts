import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-addition-nav-items',
  templateUrl: './addition-nav-items.component.html',
  styleUrls: ['./addition-nav-items.component.css']
})
export class AdditionNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>

  constructor() { }

  ngOnInit(): void {
  }

}
