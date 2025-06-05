import { Pipe, PipeTransform } from '@angular/core';
import { format, isSameMonth, isSameYear, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

transform(dateStart: string | Date, dateEnd: string | Date): string {
    const start = typeof dateStart === 'string' ? parseISO(dateStart) : dateStart;
    const end = typeof dateEnd === 'string' ? parseISO(dateEnd) : dateEnd;

    if (isSameMonth(start, end) && isSameYear(start, end)) {
      // Ex : 15–17 mai 2025
      return `${format(start, 'd', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
    }

    if (isSameYear(start, end)) {
      // Ex : 30 juin–5 juillet 2025
      return `${format(start, 'd MMMM', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
    }

    // Années différentes
    // Ex : 30 décembre 2024–5 janvier 2025
    return `${format(start, 'd MMMM yyyy', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
  }

}
