import { Component } from '@angular/core';
import * as AOS from 'aos';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from './core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
    selector: 'app-root',
    imports: [
        FontAwesomeModule,
        ConvertStringLabelToFontawesomeIconPipe
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit(): void {
    AOS.init();
  }
}
