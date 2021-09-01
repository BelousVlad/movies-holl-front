import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/domain-model/Genre';

@Component({
  selector: 'app-tag-slide',
  templateUrl: './tag-slide.component.html',
  styleUrls: ['./tag-slide.component.css']
})
export class TagSlideComponent<T extends { genre: Genre, isActive: boolean}> implements OnInit {

  @Input() item!: T;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClick(event: MouseEvent)
  {
    console.log(123);
    console.log(this.item)
    if(this.item.isActive) {
      this.router.navigate(['/movies'], {
        queryParams: {
          genre: this.item.genre.id
        }
      })
    }
    // event.stopPropagation();
  }
}
