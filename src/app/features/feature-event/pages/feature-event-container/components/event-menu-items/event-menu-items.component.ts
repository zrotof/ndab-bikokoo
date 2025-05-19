import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-menu-items',
  imports: [],
  templateUrl: './event-menu-items.component.html',
  styleUrl: './event-menu-items.component.scss'
})
export class EventMenuItemsComponent {
  @Input() plannerMenus: any;
  @Output() plannerMenuItemClicked = new EventEmitter<number>();

  onPlannerMenuClicked(id: number): void {
    this.plannerMenuItemClicked.emit(id)
  }
}
