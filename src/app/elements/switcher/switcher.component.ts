import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent<T extends {text: string}> implements OnInit {

  @ContentChild("template1", { static: false })
  template!: TemplateRef<any>;

  @Input() items!: Array<T>;

  constructor() { }

  ngOnInit(): void {
  }

}
