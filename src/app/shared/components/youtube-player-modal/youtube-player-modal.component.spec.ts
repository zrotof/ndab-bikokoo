import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerModalComponent } from './youtube-player-modal.component';

describe('YoutubePlayerModalComponent', () => {
  let component: YoutubePlayerModalComponent;
  let fixture: ComponentFixture<YoutubePlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubePlayerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubePlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
