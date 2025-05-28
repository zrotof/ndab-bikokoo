import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDancesComponent } from './feature-dances.component';

describe('FeatureDancesComponent', () => {
  let component: FeatureDancesComponent;
  let fixture: ComponentFixture<FeatureDancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
