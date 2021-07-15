import { Injectable, TemplateRef, ViewRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileNavContentService {

  private stack: Array<TemplateRef<any>> = []

  observer: Subject<TemplateRef<any>|null>;
  constructor() {
    this.observer = new Subject();
  }

  getObserver(): Observable<TemplateRef<any>|null> {
    return this.observer;
  }

  setView(view: TemplateRef<any>)
  {
    this.stack.push(view);
    this.observer.next(view);
    // this.observer.next(null);
  }

  pop()
  {
    this.stack.pop();
    if (this.stack.length > 0)
      this.observer.next(this.stack[this.stack.length-1]);
    else
      this.observer.next(null);
  }
  
}
