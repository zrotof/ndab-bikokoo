import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertTimeZoneToDatePipe } from 'src/app/core/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { BlogService } from 'src/app/core/services/blog.service';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe,
    ConvertTimeZoneToDatePipe,
    RouterLink,
    CarouselModule,
    NgOptimizedImage
  ]
})

export class BlogHomeComponent {

  @ViewChild('myCarousel') carousel!: Carousel;

  private readonly blogService = inject(BlogService);

  protected blog$ = this.blogService.getArticles("limit=8");

  protected readonly responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1300px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '850px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(){
    Carousel.prototype.onTouchMove = () => { };
  }
}
