import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLoaderComponent } from './map-loader.component';

describe('MapLoaderComponent', () => {
  let component: MapLoaderComponent;
  let fixture: ComponentFixture<MapLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
