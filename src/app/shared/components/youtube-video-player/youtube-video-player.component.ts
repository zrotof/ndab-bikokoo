import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video-player',
  standalone: true,
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent {

  @Input() link !: SafeResourceUrl;
  isLoading = true;

  constructor(private cdRef: ChangeDetectorRef){}
  
  onIframeLoaded(): void {

    setTimeout(() => {
      this.isLoading = false;
      this.cdRef.detectChanges(); // Manually detect changes to prevent ExpressionChangedAfterItHasBeenCheckedError
    }, 0);

    this.cdRef.detectChanges(); // Manually detect changes to prevent ExpressionChangedAfterItHasBeenCheckedError

  }
}
