import { EventEmitter } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onMobileNavActiveChange = new EventEmitter<boolean>()

  is_mobile_nav_active!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  _onMobileNavActiveChange(is_active: boolean)
  {
    this.onMobileNavActiveChange.emit(is_active);
    this.is_mobile_nav_active = is_active;
  }
}
