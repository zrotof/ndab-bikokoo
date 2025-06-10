import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-nav-small-screen',
  templateUrl: './nav-small-screen.component.html',
  styleUrl: './nav-small-screen.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink,
    PanelMenuModule
  ]
})

export class NavSmallScreenComponent {
  menuItems: MenuItem[] = [
    {
      label: 'La maison',
      icon: 'pi pi-home',
      items: [
        {
          label: 'À propos de nous ?',
          icon: 'pi pi-caret-right',
          routerLink: '/a-propos'
        },
        {
          label: 'Notre offre',
          icon: 'pi pi-caret-right',
          routerLink: '/notre-offre'
        },
        {
          label: "S'engager",
          icon: 'pi pi-caret-right',
          routerLink: '/sengager'
        }
      ]
    },
    {
      label: 'Administration',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Organigramme',
          icon: 'pi pi-caret-right',
          routerLink: '/gouvernance'
        },
        {
          label: 'Fonctionnement',
          icon: 'pi pi-caret-right',
          routerLink: '/fonctionnement'
        },
        {
          label: "Les jeunes",
          icon: 'pi pi-caret-right',
          routerLink: '/nos-jeunes'
        }
      ]
    },
    {
      label: 'Évênements',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Agenda',
          icon: 'pi pi-caret-right',
          routerLink: '/evenements'
        },
        {
          label: 'Actualités',
          icon: 'pi pi-caret-right',
          routerLink: '/actualites'
        }
      ]
    },
    {
      label: 'Culture et tradition',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Histoire',
          icon: 'pi pi-caret-right',
          routerLink: '/culture-et-tradition'
        },
        {
          label: 'Langues',
          icon: 'pi pi-caret-right',
          routerLink: '/culture-et-tradition'
        },
        {
          label: "Us et coutumes",
          icon: 'pi pi-caret-right',
          routerLink: '/culture-et-tradition'
        },
        {
          label: "Art",
          icon: 'pi pi-caret-right',
          routerLink: '/culture-et-tradition'
        }
      ]
    },
    {
      label: 'Contacts',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Contactez-nous',
          icon: 'pi pi-caret-right',
          routerLink: '/contactez-nous'
        },
        {
          label: 'Faites-vous connaitre',
          icon: 'pi pi-caret-right',
          routerLink: '/fonctionnement'
        }
      ]
    }
  ];
}
