import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MobileNavContentService } from './services/mobile-nav-content/mobile-nav-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-front';

  @ViewChild('test_template') template!: TemplateRef<any>;

  constructor(private service: MobileNavContentService) {}

  test()
  {
    this.service.setView(this.template);
  }

  test1()
  {
    this.service.pop();
  }
}
