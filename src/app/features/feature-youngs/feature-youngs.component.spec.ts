import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureYoungsComponent } from './feature-youngs.component';

describe('FeatureYoungsComponent', () => {
  let component: FeatureYoungsComponent;
  let fixture: ComponentFixture<FeatureYoungsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureYoungsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureYoungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
