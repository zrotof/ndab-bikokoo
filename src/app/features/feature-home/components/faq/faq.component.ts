import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AccordionModule,
    NgOptimizedImage
  ]
})
export class FaqComponent {
  questions = [
    {
      label: "Qui peut adhérer à l’association ?",
      response: "L’adhésion est ouverte à toute personne d’origine Ɓàsà’a vivant en dehors du continent africain et souhaitant participer à cette solidarité communautaire."
    },
    {
      label: "Comment fonctionne le système de cotisation ?",
      response: "Lorsqu’un membre de l’association décède, une somme de 7 500 euros ou 15 000 euros est versée à la personne désignée par le défunt. Ce montant est collecté auprès des membres vivants, qui contribuent chacun à parts égales."
    },
    {
      label: "Qui reçoit l’argent en cas de décès d’un adhérent ?",
      response: "Chaque membre doit désigner un premier et un deuxième ayant droit, auquel sera remis l'enveloppe de solidarité; en cas de décès de l'adhérent."
    },
    {
      label: "À quelle fréquence faut-il cotiser ?",
      response: "Les cotisations sont uniquement demandées lorsqu’un décès survient. Un appel à collecte est dès lors lancé aux membres pour constituer l'enveloppe de solidarité."
    },
    {
      label: "Que se passe-t-il si un adhérent ne paie pas sa cotisation ?",
      response: "Un adhérent qui ne participe pas à la cotisation après un décès risque une sanction qui peut aller jusqu'à la perte de sa qualité de membre."
    },
    {
      label: "Que se passe-t-il si plusieurs décès surviennent en peu de temps ?",
      response: "Chaque décès entraîne un devoir de côtisation. En cas de plusieurs décès rapprochés, les adhérents seront informés et devront s’acquitter de la totalité des côtisations alors dûes."
    }
  ]
}
