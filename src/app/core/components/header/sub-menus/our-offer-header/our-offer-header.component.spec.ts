import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfferHeaderComponent } from './our-offer-header.component';

describe('OurOfferHeaderComponent', () => {
  let component: OurOfferHeaderComponent;
  let fixture: ComponentFixture<OurOfferHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurOfferHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOfferHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
