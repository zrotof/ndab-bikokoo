import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailSideBlocComponent } from './article-detail-side-bloc.component';

describe('ArticleDetailSideBlocComponent', () => {
  let component: ArticleDetailSideBlocComponent;
  let fixture: ComponentFixture<ArticleDetailSideBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailSideBlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailSideBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
