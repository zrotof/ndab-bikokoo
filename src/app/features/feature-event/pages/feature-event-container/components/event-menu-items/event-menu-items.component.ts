import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-menu-items',
  imports: [],
  templateUrl: './event-menu-items.component.html',
  styleUrl: './event-menu-items.component.scss'
})
export class EventMenuItemsComponent {
  @Input() eventMenus: any;
  @Output() eventItemClicked = new EventEmitter<number>();

  onEventClicked(id: number): void {
    this.eventItemClicked.emit(id)
  }
}
