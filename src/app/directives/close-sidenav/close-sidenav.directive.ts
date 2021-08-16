import { Directive, HostListener } from '@angular/core';
import { MobileNavContentService } from 'src/app/services/mobile-nav-content/mobile-nav-content.service';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Directive({
  selector: '[appCloseSidenav]'
})
export class CloseSidenavDirective {

  constructor(private sidenavService: SidenavService, private mobilenav: MobileNavContentService) {} 

  @HostListener('click')
  onClick()
  {
    this.sidenavService.setInactive();
    this.mobilenav.pop();
  }
}
