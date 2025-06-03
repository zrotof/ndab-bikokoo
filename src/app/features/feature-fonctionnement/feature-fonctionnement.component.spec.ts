import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFonctionnementComponent } from './feature-fonctionnement.component';

describe('FeatureFonctionnementComponent', () => {
  let component: FeatureFonctionnementComponent;
  let fixture: ComponentFixture<FeatureFonctionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFonctionnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureFonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
