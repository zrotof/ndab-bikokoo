import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiping-hero-banner',
  templateUrl: './swiping-hero-banner.component.html',
  styleUrl: './swiping-hero-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class SwipingHeroBannerComponent {
  swiper!: Swiper;

  @ViewChild('swiperRef', { static: false }) swiperRef?: ElementRef;

  public readonly config = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  ngAfterViewInit(): void {
    if (this.swiperRef) {
      Object.assign(this.swiperRef.nativeElement, this.config);
      this.swiperRef.nativeElement.initialize();  // Initialize Swiper
      this.swiper = this.swiperRef.nativeElement.swiper;
    }
  }

  onNavigationEvent(param: number): void {
    if (this.swiper) {
      param > 0 ? this.swiper.slideNext() : this.swiper.slidePrev();
    }
  }
  
}
