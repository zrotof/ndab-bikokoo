import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToDirective } from 'src/app/core/directives/scroll-to/scroll-to.directive';

@Component({
  selector: 'app-about-us-header',
  templateUrl: './about-us-header.component.html',
  styleUrl: './about-us-header.component.scss',
  imports: [
    ScrollToDirective,
    RouterLink,
    NgOptimizedImage
  ]
})

export class AboutUsHeaderComponent {

}
