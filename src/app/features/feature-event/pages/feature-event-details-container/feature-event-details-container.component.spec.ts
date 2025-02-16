import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEventDetailsContainerComponent } from './feature-event-details-container.component';

describe('FeatureEventDetailsContainerComponent', () => {
  let component: FeatureEventDetailsContainerComponent;
  let fixture: ComponentFixture<FeatureEventDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEventDetailsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureEventDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
