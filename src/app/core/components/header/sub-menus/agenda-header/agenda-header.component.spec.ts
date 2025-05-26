import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHeaderComponent } from './agenda-header.component';

describe('AgendaHeaderComponent', () => {
  let component: AgendaHeaderComponent;
  let fixture: ComponentFixture<AgendaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
