import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMenuItemsComponent } from './event-menu-items.component';

describe('EventMenuItemsComponent', () => {
  let component: EventMenuItemsComponent;
  let fixture: ComponentFixture<EventMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventMenuItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
