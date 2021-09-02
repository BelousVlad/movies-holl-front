import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Type, ViewChild, ViewContainerRef, } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

  hover: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
    
  }

  mouseEnter()
  {
    this.hover = true;
  }

  mouseLeave()
  {
    this.hover = false;
  }
}
