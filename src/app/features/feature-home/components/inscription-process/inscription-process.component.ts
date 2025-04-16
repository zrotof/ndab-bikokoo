import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inscription-process',
  templateUrl: './inscription-process.component.html',
  styleUrl: './inscription-process.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage
  ]
})

export class InscriptionProcessComponent {

  inscriptionProcesses = [
    {
      image: "img/home/inscriptions/one.png",
      title: "Le Bulletin d'adhésion",
      description: "Créez votre Identité numérique en remplissant le bulletin d'adhésion en ligne."
    },
    {
      image: "img/home/inscriptions/two.png",
      title: "La vidéo de présentation",
      description: "Préparez votre pitch  et téléchargez la vidéo qui vous présentera à tous les membres Ndab Bìkòkoo."
    },
    {
      image: "img/home/inscriptions/three.png",
      title: "Les frais d'adhésion et la réserve de solidarité",
      description: "En fonction de votre cas, acquittez-vous,  des frais de contribution à la vie Ndab Bikokoo."
    }
  ]
}
