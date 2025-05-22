import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanJoinComponent } from './who-can-join.component';

describe('WhoCanJoinComponent', () => {
  let component: WhoCanJoinComponent;
  let fixture: ComponentFixture<WhoCanJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoCanJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoCanJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
