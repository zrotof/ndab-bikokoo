import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureItemsComponent } from './culture-items.component';

describe('CultureItemsComponent', () => {
  let component: CultureItemsComponent;
  let fixture: ComponentFixture<CultureItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
