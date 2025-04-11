import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Input, Renderer2, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { SOCIAL_MEDIA } from '../../../shared/constants/social-media.constants';
import { ActivationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('contactBadge') contactBadge !: ElementRef<HTMLElement>;
  @ViewChild('navElement') navElement !: ElementRef<HTMLElement>;
  
  private readonly router = inject(Router);
  private  _renderer = inject(Renderer2);

  protected readonly networks = SOCIAL_MEDIA;

  isBackgroundReduced = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.isBackgroundReduced){
      this._renderer.addClass(this.navElement.nativeElement, 'fixed');
    }
    else{
      if (window.pageYOffset > 47) {
        this._renderer.addClass(this.navElement.nativeElement, 'fixed');
      }
      else {
        this._renderer.removeClass(this.navElement.nativeElement, 'fixed');
      }
    }
  }
}
