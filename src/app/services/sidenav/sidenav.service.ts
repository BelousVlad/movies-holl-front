import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }
  isActive: boolean = false;
  private observer: Subject<boolean> = new Subject<boolean>();
  private template_observer: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>();

  getStateObserver(): Observable<boolean>
  {
    return this.observer;
  }
  getTemplateObserver(): Observable<TemplateRef<any>>
  {
    return this.template_observer;
  }

  setTemplate(temp: TemplateRef<any>)
  {
    this.template_observer.next(temp);
  }

  setState(isActive: boolean)
  {
    this.isActive = isActive;
    this.observer.next(isActive);
  }
  setActive()
  {
    this.setState(true);
  }
  setInactive()
  {
    this.setState(false);
  }
  toggle()
  {
    this.setState(!this.isActive);
  }
}
