import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephone-callback',
  templateUrl: './telephone-callback.component.html',
  styleUrls: ['./telephone-callback.component.css']
})
export class TelephoneCallbackComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClick()
  {
    const elem = document.getElementById('callback-section')
    elem?.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

}
