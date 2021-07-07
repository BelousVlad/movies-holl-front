import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.css'],
  host: {
    '[@in-out]': 'is_show ? "in" : "out"'
  },
  animations: [
    trigger('in-out', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in <=> out', [
        animate('.5s')
      ])
    ])
  ]
})
export class MobileNavMenuComponent implements OnInit {

  constructor() { }

  @Input() is_show = false;

  ngOnInit(): void {
  }



}
