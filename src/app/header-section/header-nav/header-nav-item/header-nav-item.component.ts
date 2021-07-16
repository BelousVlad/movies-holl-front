import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-header-nav-item',
  templateUrl: './header-nav-item.component.html',
  styleUrls: ['./header-nav-item.component.css']
})
export class HeaderNavItemComponent implements OnInit {

  @Input() item!: MenuItem;
  showChildMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
