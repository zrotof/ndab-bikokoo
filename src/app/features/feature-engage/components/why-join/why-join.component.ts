import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-join',
  templateUrl: './why-join.component.html',
  styleUrl: './why-join.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class WhyJoinComponent {
  protected readonly reasons = [
    {
      picto: "/img/picto/mains-noires.png",
      title: "Réunir et soutenir",
      text: "Assurer l'offre d'une aide de à l'organisation de rapatriement de corps digne.",
      bgColor: "var(--project-blue-primary-color)"
    },
    {
      picto: "/img/picto/1-la-maison.png",
      title: "Faire de Ndab Bikokoo le hub de la diaspora Ɓàsà’a",
      text: "Opérer auprès de la diaspora Ɓàsà’a, éparpillée dans le monde entier.",
      bgColor: "var(--project-green-primary-color)"

    },
    {
      picto: "/img/picto/2-1-organigramme.png",
      title: "Développer votre réseau professionnel",
      text: "Vous serez en mesure de profiter des opportunités que les relations créées autour de vous, vous offrions.",
      bgColor: "var(--project-brown-quaterly-color)"

    }
  ]
}
