import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TestimonyService } from 'src/app/core/services/testimony.service';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.scss',
  imports: [
    AsyncPipe,
    CarouselModule,
    NgOptimizedImage
  ]
})

export class TestimoniesComponent {
  private readonly testimonyService = inject(TestimonyService);

  protected readonly testimonies$ =  this.testimonyService.getTestimoniesList("isActive=true");

  protected readonly responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}
