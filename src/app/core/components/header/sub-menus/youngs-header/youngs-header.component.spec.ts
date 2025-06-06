import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungsHeaderComponent } from './youngs-header.component';

describe('YoungsHeaderComponent', () => {
  let component: YoungsHeaderComponent;
  let fixture: ComponentFixture<YoungsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoungsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoungsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
