import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-addition-mobile-nav-items',
  templateUrl: './addition-mobile-nav-items.component.html',
  styleUrls: ['./addition-mobile-nav-items.component.css']
})
export class AdditionMobileNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>

  constructor() { }

  ngOnInit(): void {
  }

}
