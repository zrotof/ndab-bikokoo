import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-next-events',
  imports: [
    RouterLink,
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
      country: "Pays-bas",
      date: "6-8 juin 2025",
      type: "Assemblée Générale",
      color: "#006600"
    },
    {
      image: "/img/home/events/paris.jpeg",
      town: "Paris",
      country: "France",
      date: "12-14 juin 2026",
      type: "Installation de canton",
      color: "#7E350E"
    },
    {
      image: "/img/home/events/milan.jpeg",
      town: "Milan",
      country: "Italie",
      date: "11-13 Mai 2027",
      type: "Séminaire",
      color: "#0070C0"
    },
    {
      image: "/img/home/events/milan.jpeg",
      town: "Milan",
      country: "Italie",
      date: "11-13 Mai 2027",
      type: "Assemblée Générale",
      color: "#006600"
    }
  ]
}
