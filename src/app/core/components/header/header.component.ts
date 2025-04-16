import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { SOCIAL_MEDIA } from '../../../shared/constants/social-media.constants';
import { ActivationEnd, Router, RouterLink } from '@angular/router';

import { DrawerModule } from 'primeng/drawer';

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
    DrawerModule
  ]
})

export class HeaderComponent {
  @ViewChild('contactBadge') contactBadge !: ElementRef<HTMLElement>;
  @ViewChild('navElement') navElement !: ElementRef<HTMLElement>;
  
  private readonly router = inject(Router);
  private  _renderer = inject(Renderer2);

  protected readonly networks = SOCIAL_MEDIA;

  isBackgroundReduced = false;
  private submenuTimeout: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.isBackgroundReduced){
      this._renderer.addClass(this.navElement.nativeElement, 'fixed');
    }
    else{
      if (window.pageYOffset > 47) {
        this._renderer.addClass(this.navElement.nativeElement, 'fixed');
      }
      else {
        this._renderer.removeClass(this.navElement.nativeElement, 'fixed');
      }
    }
  }


  menuItems = [
    {
      label: 'La Maison',
      children: [
        { label: 'Histoire et valeurs', link: '/vehicles/cars' },
        { label: 'Notre approches', link: '/vehicles/motorbikes' }
      ],
      open: false
    },
    {
      label: 'Gouvernance',
      link: '/parts',
      children: [
        { label: 'Organnigramme', link: '/vehicles/cars' },
        { label: 'Fonctionnement', link: '/vehicles/motorbikes' },
        { label: 'Nos cadres', link: '/vehicles/motorbikes' },
        { label: 'Nos experts', link: '/vehicles/motorbikes' }
      ],
      open: false
    },
    {
      label: 'Évênements',
      link: '/garages',
      children: [
        { label: 'Assemblées générales', link: '/vehicles/cars' },
        { label: 'Installation des cantons', link: '/vehicles/motorbikes' },
        { label: 'Séminaires de travail', link: '/vehicles/motorbikes' },
      ],
      open: false
    },
    {
      label: 'Culture',
      link: '/garages',
      children: [
        { label: 'Langues bassa', link: '/vehicles/cars' },
        { label: 'Nos traditions', link: '/vehicles/motorbikes' },
        { label: 'Nos danses', link: '/vehicles/motorbikes' },
        { label: 'Notre gastronomie', link: '/vehicles/motorbikes' },
        { label: 'Notre tissu', link: '/vehicles/motorbikes' }
      ],
      open: false
    },
    {
      label: 'Contacts',
      link: '/garages',
      children: [
        { label: 'Tel/Email', link: '/vehicles/cars' },
        { label: 'Vous faire connaitre', link: '/vehicles/motorbikes' },
      ],
      open: false
    }
  ];
  toggleInSubmenu(item: any) {
    clearTimeout(this.submenuTimeout);
    this.menuItems.forEach(i => {
      if (i !== item) i.open = false;
    });
    item.open = true;
  }
  
  toggleOutSubmenu(item: any) {
    this.submenuTimeout = setTimeout(() => {
      item.open = false;
    }, 300); // Délai pour laisser le temps à la souris d'entrer dans le drawer
  }

  cancelToggleOut() {
    clearTimeout(this.submenuTimeout);
  }
  

}
