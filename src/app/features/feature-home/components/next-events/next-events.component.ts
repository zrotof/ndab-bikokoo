import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-next-events',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './next-events.component.html',
  styleUrl: './next-events.component.scss'
})
export class NextEventsComponent {

  protected readonly events = [
    
    {
      image: "/img/home/events/amsterdam.jpeg",
      town: "Amsterdam",
      country: "PAYS-BAS",
      date: "6 juin 2025",
      type: "Assemblée Générale"
    },
    {
      image: "/img/home/events/paris.jpeg",
      town: "Paris",
      country: "France",
      date: "5 juin 2026",
      type: "Assemblée Générale"
    },
    {
      image: "/img/home/events/milan.jpeg",
      town: "Milan",
      country: "ITALIE",
      date: "11 Mai 2027",
      type: "Assemblée Générale"
    }
  ]
}
