import { NgOptimizedImage } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { ConvertTimeZoneToDatePipe } from 'src/app/core/pipes/convertTimeZoneToDate/convert-timezone-to-date.pipe';
import { YoutubeVideoPlayerComponent } from 'src/app/shared/components/youtube-video-player/youtube-video-player.component';

@Component({
  selector: 'app-article-data',
  templateUrl: './article-data.component.html',
  styleUrl: './article-data.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    ConvertTimeZoneToDatePipe,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
    YoutubeVideoPlayerComponent
  ],

})
export class ArticleDataComponent {
  article = input.required<any>();

}
