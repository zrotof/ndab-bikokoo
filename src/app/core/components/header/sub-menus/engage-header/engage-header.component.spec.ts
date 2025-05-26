import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageHeaderComponent } from './engage-header.component';

describe('EngageHeaderComponent', () => {
  let component: EngageHeaderComponent;
  let fixture: ComponentFixture<EngageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
