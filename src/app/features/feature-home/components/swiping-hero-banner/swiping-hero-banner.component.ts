import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { YoutubePlayerModalComponent } from 'src/app/shared/components/youtube-player-modal/youtube-player-modal.component';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiping-hero-banner',
  templateUrl: './swiping-hero-banner.component.html',
  styleUrl: './swiping-hero-banner.component.scss',
  providers: [ DialogService, DynamicDialogRef ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class SwipingHeroBannerComponent {
  
  public ref = inject(DynamicDialogRef);
  public dialogService = inject(DialogService);

  swiper!: Swiper;

  @ViewChild('swiperRef', { static: false }) swiperRef?: ElementRef;

  public readonly config = {
    slidesPerView: 1,
    loop: true,
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

  onVideoClick(){
    const url = 'https://www.youtube.com/embed/GypIvT-IdB0?si=zlH6dE72S9S9bauq';

    this.ref = this.dialogService.open(YoutubePlayerModalComponent, {
      data: {
        youtubeUrlVideo: url
      },
      modal:true,
      baseZIndex: 10000,
      showHeader: false,
      maskStyleClass : "youtube-video-dialog-mask"
    });
  }

}
