import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-mobile-panel-nav-items',
  templateUrl: './mobile-panel-nav-items.component.html',
  styleUrls: ['./mobile-panel-nav-items.component.css']
})
export class MobilePanelNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>

  constructor() { }

  ngOnInit(): void {
  }

}
