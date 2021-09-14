import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-mobile-panel-nav-item',
  templateUrl: './mobile-panel-nav-item.component.html',
  styleUrls: ['./mobile-panel-nav-item.component.css']
})
export class MobilePanelNavItemComponent implements OnInit {

  @Input() item!: MenuItem;
  show_menu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
