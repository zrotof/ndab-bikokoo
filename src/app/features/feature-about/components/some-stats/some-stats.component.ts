import { Component } from '@angular/core';

@Component({
  selector: 'app-some-stats',
  imports: [],
  templateUrl: './some-stats.component.html',
  styleUrl: './some-stats.component.scss'
})
export class SomeStatsComponent {

  protected readonly stats = [
    {
      value: "+300",
      label: "Familles Aidées",
    },
    {
      value: "50",
      label: "Cantons",
    },
    {
      value: "9",
      label: "Ans d'Existence",
    } 
  ]
}
