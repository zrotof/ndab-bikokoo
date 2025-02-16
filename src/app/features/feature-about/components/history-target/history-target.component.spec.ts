import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTargetComponent } from './history-target.component';

describe('HistoryTargetComponent', () => {
  let component: HistoryTargetComponent;
  let fixture: ComponentFixture<HistoryTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryTargetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
