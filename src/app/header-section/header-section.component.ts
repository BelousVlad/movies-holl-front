import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MenuItem, MenusService } from '../services/menus-service/menus.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  private mobile_breakpoint = 768;

  isMobile!: boolean
  show_mobile_nav!: boolean

  nav_menu: Array<MenuItem> = [];
  addition_nav_menu: Array<MenuItem> = [];

  constructor(private menusService: MenusService) { }
  
  ngOnInit(): void {
    this.menusService.getHeaderNavMenu().subscribe(
      item => this.nav_menu.push(item)
    )
    this.menusService.getAdditionalNavMenu().subscribe(
      item => this.addition_nav_menu.push(item)
    )

    this.onResize();
  }
  
  @HostListener('window:resize')
  onResize()
  {
    this.isMobile = window.innerWidth <= this.mobile_breakpoint; 
  }

  onMobileNavActiveChange(is_active: boolean) {
    this.show_mobile_nav = is_active;
  }

}
