import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrl: './blog-articles.component.scss',
  imports: [
    NgOptimizedImage,
    DatePipe,
    RouterLink
  ],
})

export class BlogArticlesComponent {

  articles = input.required<any>();
}
