import { out } from '@amcharts/amcharts5/.internal/core/util/Ease';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrl: './blog-menu.component.scss',
  imports: [],

})
export class BlogMenuComponent {

  menus = input.required<any>();
  blogMenuClieckedEventEmitter = output<number>();

  onBlogMenuClicked(index : number){
    this.blogMenuClieckedEventEmitter.emit(index)
  }
}
