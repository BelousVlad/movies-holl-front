import { ChildMenuItem } from './../../../services/menus-service/menus.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-header-nav-items',
  templateUrl: './header-nav-items.component.html',
  styleUrls: ['./header-nav-items.component.css']
})
export class HeaderNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>

  constructor() { }

  ngOnInit(): void {
  }
}
