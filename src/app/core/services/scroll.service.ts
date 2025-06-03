import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollToFragment(fragment: string, offset = -100, delay = 300): void {
    if (!fragment) return;

    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, delay);
  }
}
