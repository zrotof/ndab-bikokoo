import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertTimeZoneToDatePipe } from 'src/app/core/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
  imports: [
    AsyncPipe,
    ConvertTimeZoneToDatePipe,
    RouterLink,
    NgOptimizedImage
  ]
})

export class BlogHomeComponent {
  private readonly blogService = inject(BlogService);

  protected blog$ = this.blogService.getArticles("limit=3");
}
