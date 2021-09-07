import { ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit{

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2) {
    // renderer
  }
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'app-input');
  }
}