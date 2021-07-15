import { Component, OnInit, TemplateRef } from '@angular/core';
import { MobileNavContentService } from 'src/app/services/mobile-nav-content/mobile-nav-content.service';

@Component({
  selector: 'app-mobile-header-nav',
  templateUrl: './mobile-header-nav.component.html',
  styleUrls: ['./mobile-header-nav.component.css']
})
export class MobileHeaderNavComponent implements OnInit {

  currentTemplate!: TemplateRef<any>|null;

  constructor(private contentService: MobileNavContentService) { }

  ngOnInit(): void {
    this.contentService.getObserver().subscribe(
      item => this.currentTemplate = item
    )
  }

  

}
