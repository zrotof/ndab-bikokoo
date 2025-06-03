import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsHeaderComponent } from './us-header.component';

describe('UsHeaderComponent', () => {
  let component: UsHeaderComponent;
  let fixture: ComponentFixture<UsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
