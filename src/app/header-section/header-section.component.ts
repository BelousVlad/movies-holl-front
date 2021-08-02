import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MenuItem, MenusService } from '../services/menus-service/menus.service';
import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit, AfterViewInit {

  private mobile_breakpoint = 815;

  isMobile!: boolean
  show_mobile_nav!: boolean

  nav_menu: Array<MenuItem> = [];
  addition_nav_menu: Array<MenuItem> = [];

  @ViewChild('mobileMenuTemp') mobileNavMenu!: TemplateRef<any>

  constructor(private menusService: MenusService, private sidenavService: SidenavService) { }
  
  ngAfterViewInit(): void {
    this.sidenavService.setTemplate(this.mobileNavMenu)
  }

  ngOnInit(): void {
    this.menusService.getHeaderNavMenu().subscribe(
      item => this.nav_menu.push(item)
    )
    this.menusService.getAdditionalNavMenu().subscribe(
      item => this.addition_nav_menu.push(item)
    )

    this.onResize();
    // console.log(this.header);

  }
  
  @HostListener('window:resize')
  onResize()
  {
    this.isMobile = window.innerWidth < this.mobile_breakpoint; 
  }

  onMobileNavActiveChange(is_active: boolean) {
    this.show_mobile_nav = is_active;
  }
}
