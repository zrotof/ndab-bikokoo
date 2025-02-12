import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipingHeroBannerComponent } from './swiping-hero-banner.component';

describe('SwipingHeroBannerComponent', () => {
  let component: SwipingHeroBannerComponent;
  let fixture: ComponentFixture<SwipingHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipingHeroBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipingHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
