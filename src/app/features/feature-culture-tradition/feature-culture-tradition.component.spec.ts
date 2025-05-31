import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCultureTraditionComponent } from './feature-culture-tradition.component';

describe('FeatureCultureTraditionComponent', () => {
  let component: FeatureCultureTraditionComponent;
  let fixture: ComponentFixture<FeatureCultureTraditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCultureTraditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCultureTraditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
