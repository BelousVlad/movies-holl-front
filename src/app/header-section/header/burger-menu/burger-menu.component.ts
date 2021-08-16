import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { HostListener, Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css'],
})
export class BurgerMenuComponent implements OnInit {

  @Output() onActiveChange = new EventEmitter<boolean>()
  @Input() isActive!: boolean //TODO false

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
