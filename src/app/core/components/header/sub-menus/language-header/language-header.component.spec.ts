import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageHeaderComponent } from './language-header.component';

describe('LanguageHeaderComponent', () => {
  let component: LanguageHeaderComponent;
  let fixture: ComponentFixture<LanguageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
