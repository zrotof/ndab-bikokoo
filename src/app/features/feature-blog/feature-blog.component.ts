import { Component, inject, OnInit } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { BlogArticlesComponent } from './components/blog-articles/blog-articles.component';
import { BlogService } from 'src/app/core/services/blog.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-feature-blog',
  templateUrl: './feature-blog.component.html',
  styleUrl: './feature-blog.component.scss',
  imports: [
    AsyncPipe,
    HeroBannerTypeTwoComponent,
    BlogMenuComponent,
    BlogArticlesComponent
  ]
})

export class FeatureBlogComponent implements OnInit {

  private readonly blogService = inject(BlogService);

  protected menus: any;
  protected articles$ !: Observable<any>;
  protected readonly heroData: HeroTypeTwo = {
    image: '/img/dances/assiko.jpg',
    title: 'Actualités',
    menus: [
      {
        label: "Accueil",
        url: "/"
      },
      {
        label: "Actualités",
        url: ""
      }
    ]
  }

  ngOnInit(): void {
    this.getBlogMenu();
  }

  getBlogMenu(): void {
    this.blogService.getBlogMenu().subscribe({
      next: (res: any) => {
        this.menus = res;
      },
      complete:(()=>{
        this.onBlogMenuEventHandler(0);
      })
    })
  }

  onBlogMenuEventHandler(currentIndex: number) {
    if (!this.menus[currentIndex].isActive) {
      this.menus.forEach((menu: any) => menu.isActive = false);
      this.menus[currentIndex].isActive = true;

      this.getArticleByMenuId(this.menus[currentIndex].id)
    }
  }

  getArticleByMenuId(menuId : string) : void{
    this.articles$ = this.blogService.getBlogArticlesByMenuId(menuId)
  }

}
