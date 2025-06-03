import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { SOCIAL_MEDIA } from '../../../shared/constants/social-media.constants';
import { Router, RouterLink } from '@angular/router';

import { DrawerModule } from 'primeng/drawer';
import { SubMenuIdEnum } from '../../enums/sub-menu-id.enum';
import { AboutUsHeaderComponent } from './sub-menus/about-us-header/about-us-header.component';
import { EngageHeaderComponent } from './sub-menus/engage-header/engage-header.component';
import { AgendaHeaderComponent } from './sub-menus/agenda-header/agenda-header.component';
import { NewsHeaderComponent } from './sub-menus/news-header/news-header.component';
import { HistoryHeaderComponent } from "./sub-menus/history-header/history-header.component";
import { LanguageHeaderComponent } from "./sub-menus/language-header/language-header.component";
import { UsHeaderComponent } from "./sub-menus/us-header/us-header.component";
import { ArtHeaderComponent } from "./sub-menus/art-header/art-header.component";
import { OurOfferHeaderComponent } from "./sub-menus/our-offer-header/our-offer-header.component";
import { OrganigramHeaderComponent } from "./sub-menus/organigram-header/organigram-header.component";
import { HowWeWorkHeaderComponent } from "./sub-menus/how-we-work-header/how-we-work-header.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    DrawerModule,
    AboutUsHeaderComponent,
    EngageHeaderComponent,
    AgendaHeaderComponent,
    NewsHeaderComponent,
    HistoryHeaderComponent,
    LanguageHeaderComponent,
    UsHeaderComponent,
    ArtHeaderComponent,
    OurOfferHeaderComponent,
    OrganigramHeaderComponent,
    HowWeWorkHeaderComponent
]
})

export class HeaderComponent {
  @ViewChild('contactBadge') contactBadge !: ElementRef<HTMLElement>;
  @ViewChild('navElement') navElement !: ElementRef<HTMLElement>;

  private readonly router = inject(Router);
  private _renderer = inject(Renderer2);

  protected readonly networks = SOCIAL_MEDIA;
  protected currentSubMenus: any;
  protected currentSubMenu: any;

  isBackgroundReduced = false;
  private submenuTimeout: any;

  protected readonly SUBMENUIDENUM = SubMenuIdEnum;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBackgroundReduced) {
      this._renderer.addClass(this.navElement.nativeElement, 'fixed');
    }
    else {
      if (window.pageYOffset > 47) {
        this._renderer.addClass(this.navElement.nativeElement, 'fixed');
      }
      else {
        this._renderer.removeClass(this.navElement.nativeElement, 'fixed');
      }
    }
  }

  protected menuItems = [
    {
      label: 'La Maison',
      children: [
        { label: 'À propos de nous?', link: '/a-propos', image: "/img/picto/1-2-notre-approche.png", id: this.SUBMENUIDENUM.ABOUT_US, isActive: false },
        { label: 'Notre offre', link: '/notre-offre', image: "/img/picto/1-2-notre-approche.png", id: this.SUBMENUIDENUM.OUR_OFFER, isActive: false },
        { label: "S'engager", link: '/sengager', image: "/img/picto/1-2-notre-approche.png", id: this.SUBMENUIDENUM.ENGAGE, isActive: false }
      ],
      open: false
    },
    {
      label: 'Administration',
      link: '/parts',
      children: [
        { label: 'Organnigramme', link: '/gouvernance', image: "/img/picto/2-1-organigramme.png", id: this.SUBMENUIDENUM.ORGANIGRAM, isActive: false },
        { label: 'Fonctionnement', link: '/fonctionnement', image: "/img/picto/2-2-fonctionnement.png", id: this.SUBMENUIDENUM.FUNCTIONNING, isActive: false },
      ],
      open: false
    },
    {
      label: 'Évênements',
      link: '/garages',
      children: [
        { label: 'Agenda', link: '/evenements', image: "/img/picto/3-1-ag.png", id: this.SUBMENUIDENUM.AGENDA, isActive: false },
        { label: 'Actualités', link: '/actualites', image: "/img/picto/2-1-organigramme.png", id: this.SUBMENUIDENUM.NEWS, isActive: false },
      ],
      open: false
    },
    {
      label: 'Culture et tradition',
      link: '/culture-et-tradition',
      children: [
        { label: 'Histoire', link: '/culture-et-tradition', image: "/img/picto/4-1-langue-basaa.png", id: this.SUBMENUIDENUM.HISTORY, isActive: false },
        { label: 'Langues', link: '/culture-et-tradition', image: "/img/picto/2-1-organigramme.png", id: this.SUBMENUIDENUM.LANGUAGES, isActive: false },
        { label: 'Us et coutumes', link: '/culture-et-tradition', image: "/img/picto/4-3-danses.png", id: this.SUBMENUIDENUM.US, isActive: false },
        { label: 'Art', link: '/culture-et-tradition', image: "/img/picto/4-4-notre-gastronomie.png", id: this.SUBMENUIDENUM.ART, isActive: false },
      ],
      open: false
    },
    {
      label: 'Contacts',
      link: '/garages',
      children: [
        { label: 'Contactez-nous', link: '/contactez-nous', image: "/img/picto/5-1-tel-email.png", id: this.SUBMENUIDENUM.CONTACT_US, isActive: false },
        { label: 'Écrivez-nous', link: '/vehicles/motorbikes', image: "/img/picto/5-2-vous-faire-connaitre.png", id: this.SUBMENUIDENUM.WRITE_US, isActive: false },
        { label: 'Vous faire connaitre', link: '/vehicles/motorbikes', image: "/img/picto/5-2-vous-faire-connaitre.png", id: this.SUBMENUIDENUM.PROFESSIONAL, isActive: false },
      ],
      open: false
    }
  ];

  onEnterMenu(item: any) {
    clearTimeout(this.submenuTimeout);
    this.menuItems.forEach(i => {
      if (i !== item) i.open = false;
    });
    item.open = true;
  }

  onLeaveMenu(item: any) {
    this.submenuTimeout = setTimeout(() => {
      item.open = false;
    }, 300); // Délai pour laisser le temps à la souris d'entrer dans le drawer
  }

  toggleOutSubmenu(item: any) {
    this.onRemoveSelectedSubMenu();
    this.submenuTimeout = setTimeout(() => {
      item.open = false;
    }, 300); // Délai pour laisser le temps à la souris d'entrer dans le drawer
  }

  cancelToggleOut() {
    clearTimeout(this.submenuTimeout);
  }

  onMenuHovered(index: number) {
    if (this.menuItems[index]) {
      this.currentSubMenus = this.menuItems[index].children;
      this.currentSubMenu = this.currentSubMenus[0];
      this.currentSubMenu.isActive = true
    }
  }

  onSelectSubMenu(index: number) {
    if (this.currentSubMenus[index].isActive != true) {
      this.currentSubMenus.forEach((child: any) => child.isActive = false);

      this.currentSubMenu = this.currentSubMenus[index];
      this.currentSubMenu.isActive = true
    }
  }

  onRemoveSelectedSubMenu() {
    this.currentSubMenu.isActive = false;
  }

}
