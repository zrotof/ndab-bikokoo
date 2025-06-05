import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
  imports: [
    AsyncPipe,
    DatePipe,
    RouterLink,
    NgOptimizedImage
  ]
})

export class BlogHomeComponent {
  private readonly blogService = inject(BlogService);

  protected blog$ = this.blogService.getArticles("limit=3");
}
