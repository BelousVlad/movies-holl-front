import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MobileNavContentService } from './services/mobile-nav-content/mobile-nav-content.service';
import { SidenavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-front';

  isOpenSidenav: boolean = false;
  sidenav_template!: TemplateRef<any>

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.getStateObserver().subscribe(
      status => this.isOpenSidenav = status
    )
      
    this.sidenavService.getTemplateObserver().subscribe(
      template =>  this.sidenav_template = template
    )
  }

  


}
