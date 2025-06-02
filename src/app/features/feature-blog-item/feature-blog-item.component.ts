import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ConvertTimeZoneToDatePipe } from "../../core/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe";
import { YoutubeVideoPlayerComponent } from "../../shared/components/youtube-video-player/youtube-video-player.component";
import { ArticleDataComponent } from './components/article-data/article-data.component';
import { ArticleDetailSideBlocComponent } from './components/article-detail-side-bloc/article-detail-side-bloc.component';

@Component({
  selector: 'app-feature-blog-item',
  templateUrl: './feature-blog-item.component.html',
  styleUrl: './feature-blog-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    ConvertTimeZoneToDatePipe,
    YoutubeVideoPlayerComponent,
    ArticleDataComponent,
    ArticleDetailSideBlocComponent
  ]
})

export class FeatureBlogItemComponent {

  id = input<string>();
  private blogService = inject(BlogService);

  protected menus$ = this.blogService.getBlogMenu();
  protected article: any;

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.blogService.getBlogArticleById(this.id()!).subscribe({
      next: (res: any) => {
        this.article = res;
      }
    })
  }
}
