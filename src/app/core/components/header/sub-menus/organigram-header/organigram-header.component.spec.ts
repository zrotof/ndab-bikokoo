import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramHeaderComponent } from './organigram-header.component';

describe('OrganigramHeaderComponent', () => {
  let component: OrganigramHeaderComponent;
  let fixture: ComponentFixture<OrganigramHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigramHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganigramHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
