import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-controll',
  templateUrl: './page-controll.component.html',
  styleUrls: ['./page-controll.component.css']
})
export class PageControllComponent implements OnInit {

  constructor() { }

  @Input() page!: number
  @Input() max_page!: number
  @Output() onNextPage = new EventEmitter<number>()
  @Output() onPrevPage = new EventEmitter<number>()

  ngOnInit(): void {
  }

}
