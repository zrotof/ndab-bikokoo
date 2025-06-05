import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-steps-menu',
  templateUrl: './steps-menu.component.html',
  styleUrl: './steps-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})

export class StepsMenuComponent {
  steps = input.required<any>();
  currentStepIndex = input.required<number>();
}
