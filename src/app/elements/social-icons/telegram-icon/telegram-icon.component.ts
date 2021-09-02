import { Component, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-telegram-icon',
  templateUrl: './telegram-icon.component.html',
  styleUrls: ['./telegram-icon.component.css', './../social-icon.css']
})
export class TelegramIconComponent extends SocialIconsComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
