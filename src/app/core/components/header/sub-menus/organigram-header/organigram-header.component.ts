import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToDirective } from 'src/app/core/directives/scroll-to/scroll-to.directive';

@Component({
  selector: 'app-organigram-header',
  templateUrl: './organigram-header.component.html',
  styleUrl: './organigram-header.component.scss',
  imports: [
    RouterLink,
    ScrollToDirective
  ]
})

export class OrganigramHeaderComponent {

}
