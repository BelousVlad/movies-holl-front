import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  private mobile_breakpoint = 768;

  isMobile!: boolean
  show_mobile_nav!: boolean

  constructor() { }
  
  ngOnInit(): void {
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
