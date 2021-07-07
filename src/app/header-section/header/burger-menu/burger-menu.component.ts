import { HostListener } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {

  @Output() onActiveChange = new EventEmitter<boolean>()
  isActive: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick()
  {
    this.isActive = !this.isActive;
    this.onActiveChange.emit(this.isActive);
  }

}
