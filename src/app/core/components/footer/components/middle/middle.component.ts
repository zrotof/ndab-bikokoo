import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-middle',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.scss'
})
export class MiddleComponent {

}
