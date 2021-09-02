import { Component, OnInit } from '@angular/core';
import { SocialIconsComponent } from '../social-icons.component';

@Component({
  selector: 'app-printerest-icon',
  templateUrl: './printerest-icon.component.html',
  styleUrls: ['./printerest-icon.component.css','./../social-icon.css']
})
export class PrinterestIconComponent extends SocialIconsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
