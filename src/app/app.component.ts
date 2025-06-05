import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

import * as AOS from 'aos';
import { filter } from 'rxjs';
import { ScrollService } from './core/services/scroll.service';
import { TopHeaderComponent } from './core/components/top-header/top-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    TopHeaderComponent
  ]
})

export class AppComponent {

  isFooterAndHeaderShouldBeenDisplayed !: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    AOS.init();

    this.handleHeaderAndFooterVisibility();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          this.scrollService.scrollToFragment(fragment, -120); // offset en pixels
        }
      });
  }

  handleHeaderAndFooterVisibility(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isHeaderDisplayed = this.router.routerState.snapshot.root.firstChild?.data?.['isHeaderDisplayed'];
        this.isFooterAndHeaderShouldBeenDisplayed = isHeaderDisplayed === false ? false : true
      }
    });
  }

}
