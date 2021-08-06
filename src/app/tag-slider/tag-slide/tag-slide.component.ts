import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/domain-model/Genre';

@Component({
  selector: 'app-tag-slide',
  templateUrl: './tag-slide.component.html',
  styleUrls: ['./tag-slide.component.css']
})
export class TagSlideComponent implements OnInit {

  @Input() item!: Genre;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClick(event: MouseEvent)
  {
    this.router.navigate(['/movies'], {
      queryParams: {
        genre: this.item.id
      }
    })
    event.stopPropagation();
  }
}
