import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/services/menus-service/menus.service';

@Component({
  selector: 'app-addition-nav-items',
  templateUrl: './addition-nav-items.component.html',
  styleUrls: ['./addition-nav-items.component.css']
})
export class AdditionNavItemsComponent implements OnInit {

  @Input() items!: Array<MenuItem>

  constructor(private router: Router,  @Inject(LOCALE_ID) public lang: string ) { }

  ngOnInit(): void {
  }

}
