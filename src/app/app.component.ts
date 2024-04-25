import { Component } from '@angular/core';
import * as AOS from 'aos';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons'
import { faFaceMehBlank, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title ="";
  
  faFaceSmile = faFaceSmile;
  faFaceMehBlank = faFaceMehBlank;
  faFaceMeh = faFaceMeh;
  faFaceLaugh = faFaceLaugh;

  ngOnInit(): void {
    AOS.init();
  }
}
