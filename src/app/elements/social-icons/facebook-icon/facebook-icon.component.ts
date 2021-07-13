import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-facebook-icon',
  templateUrl: './facebook-icon.component.html',
  styleUrls: ['./facebook-icon.component.css', './../social-icon.css']
})
export class FacebookIconComponent extends SocialIconsComponent{

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
