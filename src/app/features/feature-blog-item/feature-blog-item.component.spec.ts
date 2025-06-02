import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlogItemComponent } from './feature-blog-item.component';

describe('FeatureBlogItemComponent', () => {
  let component: FeatureBlogItemComponent;
  let fixture: ComponentFixture<FeatureBlogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBlogItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
