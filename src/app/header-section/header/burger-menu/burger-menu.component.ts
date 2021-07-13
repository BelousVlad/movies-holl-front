import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { HostListener } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css'],
  // animations: [
  //   trigger('anim', [
  //     state('active', style({
  //     })),
  //     transition('active <=> inactive',[
  //       query('@lineAnim', [
  //         animateChild()
  //       ])
  //     ])

  //   ]),
  //   trigger('lineAnim', [
  //     state('active', style({
  //       transform: 'translateX(100px)'
  //     })),
  //     transition('* <=> active', [
  //       query(':self', [
  //         stagger(150,[animate('.5s')])
  //       ])
  //     ])
  //   ])
  // ],
  // host: {
  //   '[@anim]': 'isActive ? "active": "inactive"'
  // }
})
export class BurgerMenuComponent implements OnInit {

  @Output() onActiveChange = new EventEmitter<boolean>()
  isActive: boolean = true //TODO false

  constructor() { }

  ngOnInit(): void {
    // console.log(this.isActive)
    this.onActiveChange.emit(this.isActive); //TODO clear stroke
  }

  @HostListener('click')
  onClick()
  {
    this.isActive = !this.isActive;
    this.onActiveChange.emit(this.isActive);
  }

}
