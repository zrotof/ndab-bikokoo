import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';

@Component({
  selector: 'app-feature-food',
  templateUrl: './feature-food.component.html',
  styleUrl: './feature-food.component.scss',
  imports: [
    RouterOutlet,
    HeroBannerTypeTwoComponent
  ]
})

export class FeatureFoodComponent implements OnInit {

  private router = inject(Router);

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'Notre Gastronomie',
    menus: [
      {
        label: 'Accueil',
        url: '/'
      },
      {
        label: 'Notre Gastronomie',
        url: ''
      },
    ]
  };

  protected readonly foodListMenu = [
    {
      link: "/notre-gastronomie/bongo-tchobi",
      label: "Mbogo'o Tchobi",
      isActive: false
    },
    {
      link: "/notre-gastronomie/sanga",
      label: "Sanga",
      isActive: false
    },
    {
      link: "",
      label: "Mintumba",
      isActive: false
    },
    {
      link: "",
      label: "Mingweya",
      isActive: false
    },
    {
      link: "",
      label: "Mingweya",
      isActive: false
    }
  ]

  ngOnInit(): void {
    this.onChooseItem(0)
  }

  onChooseItem(index : any){
    if(!this.foodListMenu[index].isActive){
      this.foodListMenu.forEach(menu => menu.isActive = false);

      this.foodListMenu[index].isActive = true;

      this.router.navigateByUrl(this.foodListMenu[index].link)
    }
  }
}
