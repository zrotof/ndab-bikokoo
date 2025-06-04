import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOurOfferComponent } from './feature-our-offer.component';

describe('FeatureOurOfferComponent', () => {
  let component: FeatureOurOfferComponent;
  let fixture: ComponentFixture<FeatureOurOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOurOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureOurOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
