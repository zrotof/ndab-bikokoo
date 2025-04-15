import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';

@Component({
  selector: 'app-hero-banner-type-two',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero-banner-type-two.component.html',
  styleUrl: './hero-banner-type-two.component.scss'
})
export class HeroBannerTypeTwoComponent {

  @Input() heroData !: HeroTypeTwo;
  
}
