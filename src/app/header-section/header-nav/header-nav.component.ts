import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MenusService } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  @Input() nav_menu!: Array<MenuItem>

  constructor(private menus: MenusService) { }

  ngOnInit(): void {
    if (!this.nav_menu) {
      this.nav_menu = [];
      this.menus.getHeaderNavMenu().subscribe(item =>
        this.nav_menu.push(item)
      )
    }
  }
}
