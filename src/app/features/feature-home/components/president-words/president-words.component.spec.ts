import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentWordsComponent } from './president-words.component';

describe('PresidentWordsComponent', () => {
  let component: PresidentWordsComponent;
  let fixture: ComponentFixture<PresidentWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
