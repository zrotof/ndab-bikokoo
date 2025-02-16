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
      value: "+90",
      label: "Familles Aidées",
    },
    {
      value: "92",
      label: "Cantons",
    },
    {
      value: "7",
      label: "Ans d'Existence",
    } 
  ]
}
