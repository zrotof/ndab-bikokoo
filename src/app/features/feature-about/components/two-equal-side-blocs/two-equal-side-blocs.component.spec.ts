import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoEqualSideBlocsComponent } from './two-equal-side-blocs.component';

describe('TwoEqualSideBlocsComponent', () => {
  let component: TwoEqualSideBlocsComponent;
  let fixture: ComponentFixture<TwoEqualSideBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoEqualSideBlocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoEqualSideBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
