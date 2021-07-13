import { Component, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-youtube-icon',
  templateUrl: './youtube-icon.component.html',
  styleUrls: ['./youtube-icon.component.css', './../social-icon.css']
})
export class YoutubeIconComponent extends SocialIconsComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
