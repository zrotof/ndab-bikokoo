import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AccordionModule
  ]
})
export class FaqComponent {
  questions = [
    {
      label: "Qui peut adhérer à l’association ?",
      response: "L’adhésion est ouverte à toute personne d’origine Bassa’a vivant en dehors du continent africain et souhaitant participer à cette solidarité communautaire."
    },
    {
      label: "Comment fonctionne le système de cotisation ?",
      response: "Lorsqu’un membre de l’association décède, une somme de 15 000 euros est versée à la personne désignée par le défunt. Ce montant est collecté auprès des membres vivants, qui contribuent chacun à parts égales."
    },
    {
      label: "Qui reçoit l’argent en cas de décès d’un adhérent ?",
      response: "Chaque membre doit désigner un bénéficiaire (famille, proche) qui recevra la somme en cas de décès."
    },
    {
      label: "À quelle fréquence faut-il cotiser ?",
      response: "Les cotisations sont uniquement demandées lorsqu’un décès survient dans l’association. Une somme est alors calculée et répartie équitablement entre tous les adhérents."
    },
    {
      label: "Que se passe-t-il si un adhérent ne paie pas sa cotisation ?",
      response: "Un adhérent qui ne participe pas à la cotisation après un décès risque une suspension ou une exclusion de l’association."
    },
    {
      label: "Que se passe-t-il si plusieurs décès surviennent en peu de temps ?",
      response: "Chaque décès entraîne une nouvelle collecte. En cas de plusieurs décès rapprochés, les adhérents seront informés et devront s’acquitter des différentes cotisations."
    }
  ]
}
