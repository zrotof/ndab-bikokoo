import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { DateRangePipe } from 'src/app/core/pipes/dateRange/date-range.pipe';
import { PlannerService } from 'src/app/core/services/planner.service';

@Component({
  selector: 'app-next-events',
  imports: [
    RouterLink,
    AsyncPipe,
    DateRangePipe,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './next-events.component.html',
  styleUrl: './next-events.component.scss'
})
export class NextEventsComponent {

  private readonly plannerService = inject(PlannerService);

  private readonly today = this.getTwoDaysAgoDate();
  protected readonly events$ = this.plannerService.getPlanners(`dateStart=${this.today}&order=ASC&limit=4`)


  private getTwoDaysAgoDate(): string {
  const date = new Date(); // Get current date and time
  date.setDate(date.getDate() - 2); // Subtract 2 days
  return date.toISOString().split('T')[0]; // Convert to ISO string and take only the date part
}
}
