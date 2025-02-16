import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/core/models/events';

@Component({
  selector: 'app-event-item',
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
})
export class EventItemComponent implements OnInit {
  @Input() event!: Event;
  @Output() eventItemClikedTrigger = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(this.event);
  }
  onEventClick(id: number): void {
    this.eventItemClikedTrigger.emit(id);
  }
}
