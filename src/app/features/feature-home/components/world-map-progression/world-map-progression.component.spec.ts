import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapProgressionComponent } from './world-map-progression.component';

describe('WorldMapProgressionComponent', () => {
  let component: WorldMapProgressionComponent;
  let fixture: ComponentFixture<WorldMapProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldMapProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldMapProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
