import { Component } from '@angular/core';
import { BottomComponent } from "./components/bottom/bottom.component";
import { TopComponent } from './components/top/top.component';
import { MiddleComponent } from './components/middle/middle.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    TopComponent,
    MiddleComponent,
    BottomComponent
]
})

export class FooterComponent {
 
}
