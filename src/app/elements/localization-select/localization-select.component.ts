import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-localization-select',
  templateUrl: './localization-select.component.html',
  styleUrls: ['./localization-select.component.css']
})
export class LocalizationSelectComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
  }

}
