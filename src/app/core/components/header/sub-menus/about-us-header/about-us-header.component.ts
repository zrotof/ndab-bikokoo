import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us-header',
  templateUrl: './about-us-header.component.html',
  styleUrl: './about-us-header.component.scss',
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})

export class AboutUsHeaderComponent {

}
