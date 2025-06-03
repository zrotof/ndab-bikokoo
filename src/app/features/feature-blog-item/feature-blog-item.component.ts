import { AsyncPipe } from '@angular/common';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';
import { ArticleDataComponent } from './components/article-data/article-data.component';
import { ArticleDetailSideBlocComponent } from './components/article-detail-side-bloc/article-detail-side-bloc.component';

@Component({
  selector: 'app-feature-blog-item',
  templateUrl: './feature-blog-item.component.html',
  styleUrl: './feature-blog-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe,
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
