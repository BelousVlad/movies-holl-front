import { EventEmitter } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, Output } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onMobileNavActiveChange = new EventEmitter<boolean>()

  is_mobile_nav_active!: boolean;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.getStateObserver().subscribe(
      state => this.is_mobile_nav_active = state
    )
  }

  _onMobileNavActiveChange(is_active: boolean)
  {
    // this.onMobileNavActiveChange.emit(is_active);
    this.is_mobile_nav_active = is_active;
    this.sidenavService.setState(this.is_mobile_nav_active);
  }
}
