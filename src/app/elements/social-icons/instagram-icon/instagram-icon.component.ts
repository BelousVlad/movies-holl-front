import { Component, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-instagram-icon',
  templateUrl: './instagram-icon.component.html',
  styleUrls: ['./instagram-icon.component.css', './../social-icon.css']
})
export class InstagramIconComponent extends SocialIconsComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
