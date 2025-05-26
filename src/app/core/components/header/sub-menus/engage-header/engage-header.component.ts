import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-engage-header',
  templateUrl: './engage-header.component.html',
  styleUrl: './engage-header.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]

})
export class EngageHeaderComponent {

}
