import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerTypeTwoComponent } from './hero-banner-type-two.component';

describe('HeroBannerTypeTwoComponent', () => {
  let component: HeroBannerTypeTwoComponent;
  let fixture: ComponentFixture<HeroBannerTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBannerTypeTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBannerTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
