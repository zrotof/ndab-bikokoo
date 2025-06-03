import { Component, inject, input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-article-detail-side-bloc',
  templateUrl: './article-detail-side-bloc.component.html',
  styleUrl: './article-detail-side-bloc.component.scss',
  imports: [
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule
  ]
})

export class ArticleDetailSideBlocComponent {

  blogMenus = input.required<any>();
  article = input.required<any>();

  router = inject(Router);

  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  goToArticlesMenuList(rubricId: number) {

    const navigationextras: NavigationExtras = {
      state: {
        id: rubricId
      }
    };

    this.router.navigateByUrl('/actualites', navigationextras)
  }


  getFormatedDate(dateString: string, stringHour: string | undefined): string | null {
    let fullDate = '';
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    const monthName = this.months[date.getMonth()];
    const year = date.getFullYear();

    fullDate = dayOfMonth + " " + monthName + " " + year

    stringHour ? fullDate += " à " + stringHour : fullDate
    return fullDate
  }

  onShareOnSocialMedia(socialNetwork : string): void {
      const url = `https://ndabbikokoo.com/actualites/${this.article().id}`;

      let shareLink = '';

      switch(socialNetwork) {
      case 'facebook':

      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${url}`)}`;

      break;

      case 'whatsapp':
      const messageWhatsapp =
        "*Ndab Bikokoo Pil Gweha*"
        + "\n" +
        `Thème: ${this.article().title}`
        + "\n\n" +
        `${url}`

        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageWhatsapp)}`;
      break;

      case 'twitter':
      const message2 =
        "Ndab Bikokoo Pil Gweha"
        + "\n" +
        `Thème : ${this.article().title}`
        + "\n\n"
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message2)}&url=${url}`;
      break;

      default:
        return;
    }

    window.open(shareLink, '_blank');
  }
}
