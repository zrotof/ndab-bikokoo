import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Event } from 'src/app/core/models/events';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
  imports: [
    NgClass,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})
export class EventItemComponent {
  @Input() planner!: any;
  @Output() eventItemClikedTrigger = new EventEmitter<number>();


  onEventClick(id: number): void {
    this.eventItemClikedTrigger.emit(id);
  }
}
