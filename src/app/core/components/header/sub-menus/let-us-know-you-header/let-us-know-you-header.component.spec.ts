import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetUsKnowYouHeaderComponent } from './let-us-know-you-header.component';

describe('LetUsKnowYouHeaderComponent', () => {
  let component: LetUsKnowYouHeaderComponent;
  let fixture: ComponentFixture<LetUsKnowYouHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetUsKnowYouHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetUsKnowYouHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
