import { Component } from '@angular/core';

@Component({
  selector: 'app-who-can-join',
  imports: [],
  templateUrl: './who-can-join.component.html',
  styleUrl: './who-can-join.component.scss'
})
export class WhoCanJoinComponent {

  protected readonly joiners = [
    {
      label: "Qui peut adhérer à Ndab Bikokoo?",
      possibilities: [
        "Vous êtes Ɓàsà’a (Mbɛ́nɛ̂ Ɓàti M̀pòo)",
        "Vous accepter adhérer librement au règlement intérieur de Ndab Bikokoo",
        "Vous respectez les trois conditions relatives à l'inscritption d'un membre"
      ]
    },
    {
      label: "Pour rejoindre Ndab Bikokoo:",
      possibilities: [
        "Vous devez remplir la fiche d'adhésion",
        "Vous devez fournir une vidéo de présentation",
        "Vous devez verser des frais d'hadhésion et de solidarité"
      ]
    },
  ]
}
