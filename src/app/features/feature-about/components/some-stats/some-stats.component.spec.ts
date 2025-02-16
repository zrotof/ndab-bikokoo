import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeStatsComponent } from './some-stats.component';

describe('SomeStatsComponent', () => {
  let component: SomeStatsComponent;
  let fixture: ComponentFixture<SomeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
