import { Component, OnInit } from '@angular/core';
import { MenuItem, MenusService } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private menus: MenusService) { }

  nav_menu!: Array<MenuItem>

  ngOnInit(): void {
    this.nav_menu = [];
    this.menus.getHeaderNavMenu().subscribe(item =>
      this.nav_menu.push(item)
    )
  }
}
