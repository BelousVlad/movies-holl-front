import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-header-nav-item',
  templateUrl: './header-nav-item.component.html',
  styleUrls: ['./header-nav-item.component.css']
})
export class HeaderNavItemComponent implements OnInit {
  @Input() item!: MenuItem
  constructor() { }

  ngOnInit(): void {
  }

}
