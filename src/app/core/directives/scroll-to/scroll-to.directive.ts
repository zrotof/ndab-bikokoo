import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Directive, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appScrollTo]'
})

export class ScrollToDirective {
  @Input('appScrollTo') targetId!: string;
  @Input() offset = 250;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      console.log(this.router.url)
      const url = this.router.url.split('#')[0];
      this.router.navigateByUrl(url + '#' + this.targetId).then(() => {
        setTimeout(() => {
          const element = document.getElementById(this.targetId);
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: top - this.offset,
              behavior: 'smooth',
            });
          }
        }, 50); // petit délai pour que le DOM soit prêt
      });
    }
  }
}
