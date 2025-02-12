import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionProcessComponent } from './inscription-process.component';

describe('InscriptionProcessComponent', () => {
  let component: InscriptionProcessComponent;
  let fixture: ComponentFixture<InscriptionProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
