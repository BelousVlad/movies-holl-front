import { Component, OnInit } from '@angular/core';
import { IBonus } from '../domain-model/Bonus/Bonus';
import { BonusesService } from '../services/bonuses/bonuses.service';

@Component({
  selector: 'app-bonus-section',
  templateUrl: './bonus-section.component.html',
  styleUrls: ['./bonus-section.component.css']
})
export class BonusSectionComponent implements OnInit {

  bonuses: Array<IBonus> = []

  constructor(private bonusService: BonusesService) { }

  ngOnInit(): void {
    this.bonusService.getBonuses(12).subscribe(
      item => this.bonuses.push(item)
    )
  }

}
