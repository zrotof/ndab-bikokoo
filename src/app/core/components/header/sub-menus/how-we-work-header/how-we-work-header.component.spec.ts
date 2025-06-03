import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorkHeaderComponent } from './how-we-work-header.component';

describe('HowWeWorkHeaderComponent', () => {
  let component: HowWeWorkHeaderComponent;
  let fixture: ComponentFixture<HowWeWorkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeWorkHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeWorkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
