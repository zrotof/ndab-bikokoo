import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild, ViewEncapsulation, AfterViewInit, PLATFORM_ID, NgZone } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { YoutubePlayerModalComponent } from 'src/app/shared/components/youtube-player-modal/youtube-player-modal.component';


@Component({
  selector: 'app-swiping-hero-banner',
  templateUrl: './swiping-hero-banner.component.html',
  styleUrl: './swiping-hero-banner.component.scss',
  providers: [DialogService, DynamicDialogRef],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class SwipingHeroBannerComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  public ref = inject(DynamicDialogRef);
  public dialogService = inject(DialogService);
  private ngZone = inject(NgZone);

  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;
  @ViewChild('swiperRef', { static: false }) swiperRef?: ElementRef;

  protected readonly config = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    allowTouchMove: true
  };

  private swiperInstance: any;
  private autoplayDelay = this.config.autoplay.delay;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.ngZone.runOutsideAngular(() => {
        if (this.swiperRef && this.swiperRef.nativeElement) {
          const swiperEl = this.swiperRef.nativeElement;

          Object.assign(swiperEl, this.config);

          // Initialiser le Custom Element Swiper (crée l'instance Swiper interne)
          swiperEl.initialize();

          // Récupérer l'instance Swiper pour interagir avec elle
          this.swiperInstance = swiperEl.swiper;

          // Configuration des écouteurs d'événements et démarrage de la barre de progression
          if (this.swiperInstance) {
            this.setupSwiperEvents();
            this.startProgressBar(); // Démarrer la barre dès que le Swiper est prêt
          }
        }
      })
    }
  }

  onNavigationEvent(param: number): void {
    if (isPlatformBrowser(this.platformId) && this.swiperInstance) {
      this.ngZone.run(() => {
        param > 0 ? this.swiperInstance.slideNext() : this.swiperInstance.slidePrev();
      })
    }
  }

  onVideoClick(): void {
    // Ouvrir la modale uniquement côté client
    if (isPlatformBrowser(this.platformId)) {

      this.ngZone.run(() => {

        const url = 'https://www.youtube.com/embed/GypIvT-IdB0?si=zlH6dE72S9S9bauq';

        this.ref = this.dialogService.open(YoutubePlayerModalComponent, {
          data: { youtubeUrlVideo: url },
          modal: true,
          baseZIndex: 10000,
          showHeader: false,
          maskStyleClass: "youtube-video-dialog-mask"
        });
      })
    }
  }

  private setupSwiperEvents(): void {
    if (this.swiperInstance) {
      this.swiperInstance.on('slideChangeTransitionEnd', () => {
        this.resetProgressBar();
        this.startProgressBar();
      });

      this.swiperInstance.on('autoplayStop', () => {
        this.resetProgressBar(); // Arrête la barre si l'autoplay s'arrête
      });

      this.swiperInstance.on('autoplayStart', () => {
        this.startProgressBar(); // Redémarre la barre si l'autoplay reprend
      });

      if (this.config.autoplay.disableOnInteraction) {
        this.swiperInstance.on('touchStart', () => {
          this.resetProgressBar(); // Arrête la barre immédiatement si l'utilisateur touche
        });
      }
    }
  }

  private startProgressBar(): void {
    // Vérifier si nous sommes sur le navigateur et si les éléments existent
    if (isPlatformBrowser(this.platformId) && this.progressBar && this.autoplayDelay > 0) {
      const barElement = this.progressBar.nativeElement;
      barElement.style.width = '0%';
      barElement.style.animation = 'none'; // Effacer l'animation précédente

      // Petit délai pour forcer le "reflow" et s'assurer que l'animation redémarre bien de zéro
      setTimeout(() => {
        barElement.style.animation = `fillProgressBar ${this.autoplayDelay / 1000}s linear forwards`;
      }, 10);
    }
  }

  private resetProgressBar(): void {
    // Vérifier si nous sommes sur le navigateur et si les éléments existent
    if (isPlatformBrowser(this.platformId) && this.progressBar) {
      const barElement = this.progressBar.nativeElement;
      barElement.style.animation = 'none'; // Arrêter l'animation en cours
      barElement.style.width = '0%'; // Réinitialiser la largeur
    }
  }
}