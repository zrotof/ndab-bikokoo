import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToDirective } from 'src/app/core/directives/scroll-to/scroll-to.directive';

@Component({
  selector: 'app-how-we-work-header',
  templateUrl: './how-we-work-header.component.html',
  styleUrl: './how-we-work-header.component.scss',
  imports: [
    RouterLink,
    ScrollToDirective
  ]
})

export class HowWeWorkHeaderComponent {

}
