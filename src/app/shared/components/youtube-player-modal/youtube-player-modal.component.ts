import { Component, inject, ViewEncapsulation } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-youtube-player-modal',
  templateUrl: './youtube-player-modal.component.html',
  styleUrl: './youtube-player-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class YoutubePlayerModalComponent {

  private sanitizer = inject(DomSanitizer);
  public config = inject(DynamicDialogConfig);
  public ref = inject(DynamicDialogRef);

  protected readonly safeYoutubeUrlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.data.youtubeUrlVideo);

  closeModal(){
    this.ref.close();
  }
}
