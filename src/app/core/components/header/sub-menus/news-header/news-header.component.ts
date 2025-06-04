import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrl: './news-header.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})

export class NewsHeaderComponent {

}
