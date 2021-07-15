import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent<T extends {text: string}> implements OnInit {

  @ContentChild("template", { static: false })
  template!: TemplateRef<any>

  _items!: Array<{ item: T, selected: boolean}>
  
  @Input() set items(val: Array<T>) {
    this._items = []
    val.forEach(item => this._items.push({item, selected: false}))
  }

  @Output() onSelect = new EventEmitter<T>();

  @Input() set selectedItem(val: T) {
    const item = this._items.find(item => item.item == val)
    if (item) 
      item.selected = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: { item: T, selected: boolean })
  {
    this._items.forEach(item => item.selected = false)
    item.selected = true
    this.onSelect.emit(item.item);
  }
}
