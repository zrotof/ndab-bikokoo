import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-organigram-header',
  templateUrl: './organigram-header.component.html',
  styleUrl: './organigram-header.component.scss',
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})

export class OrganigramHeaderComponent {

}
