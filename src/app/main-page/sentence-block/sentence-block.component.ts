import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-block',
  templateUrl: './sentence-block.component.html',
  styleUrls: ['./sentence-block.component.css']
})
export class SentenceBlockComponent implements OnInit {

  @Input() title!: string;
  @Input() text!: string;
  @Input() link_text!: string;
  @Input() href!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
