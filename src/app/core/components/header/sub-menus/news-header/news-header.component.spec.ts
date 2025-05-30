import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeaderComponent } from './news-header.component';

describe('NewsHeaderComponent', () => {
  let component: NewsHeaderComponent;
  let fixture: ComponentFixture<NewsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
