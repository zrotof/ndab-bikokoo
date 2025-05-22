import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEngageComponent } from './feature-engage.component';

describe('FeatureEngageComponent', () => {
  let component: FeatureEngageComponent;
  let fixture: ComponentFixture<FeatureEngageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureEngageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureEngageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
