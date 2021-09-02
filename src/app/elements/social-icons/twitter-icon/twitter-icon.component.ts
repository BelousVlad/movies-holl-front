import { Component, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-twitter-icon',
  templateUrl: './twitter-icon.component.html',
  styleUrls: ['./twitter-icon.component.css', './../social-icon.css']
})
export class TwitterIconComponent extends SocialIconsComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
