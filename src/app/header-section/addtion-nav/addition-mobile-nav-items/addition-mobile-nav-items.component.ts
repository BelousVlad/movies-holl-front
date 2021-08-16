import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-addition-mobile-nav-items',
  templateUrl: './addition-mobile-nav-items.component.html',
  styleUrls: ['./addition-mobile-nav-items.component.css']
})
export class AdditionMobileNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>
  @Output() onNavigate = new EventEmitter()

  constructor(@Inject(LOCALE_ID) public lang: string) { }

  ngOnInit(): void {
  }

}
