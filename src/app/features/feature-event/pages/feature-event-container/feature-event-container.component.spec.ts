import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEventComponent } from './feature-event-container.component';

describe('FeatureEventComponent', () => {
  let component: FeatureEventComponent;
  let fixture: ComponentFixture<FeatureEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
