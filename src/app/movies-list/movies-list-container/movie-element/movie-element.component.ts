import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from 'src/app/domain-model/Movie';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.css']
})
export class MovieElementComponent implements OnInit {

  @Input() movie!: IMovie;

  down!: Observable<any>;
  up!: Observable<any>;

  constructor(private navigate: Router, private element: ElementRef) { }

  ngOnInit(): void {
    this.down = fromEvent(this.element.nativeElement, 'mousedown');
    this.up = fromEvent(this.element.nativeElement, 'mouseup');

    this.down.subscribe(
      _ => {
        const timer_ = timer(200);
        this.up.pipe(takeUntil(timer_)).subscribe(_ => this.toItem())
      }
    )
  }

  toItem() {
    this.navigate.navigate(['item', this.movie.id]);
  }

}
