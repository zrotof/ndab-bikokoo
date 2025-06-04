import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-we-work-header',
  templateUrl: './how-we-work-header.component.html',
  styleUrl: './how-we-work-header.component.scss',
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})

export class HowWeWorkHeaderComponent {

}
