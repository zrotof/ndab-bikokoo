import { Pipe, PipeTransform } from '@angular/core';
import { format, isSameDay, isSameMonth, isSameYear, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

transform(dateStart: string | Date | null | undefined, dateEnd: string | Date | null | undefined): string {
    // Gérer les cas où les dates sont null ou undefined
    if (!dateStart || !dateEnd) {
      return ''; // Ou une autre valeur par défaut si vous le souhaitez
    }

    // Convertir les chaînes ISO en objets Date si nécessaire
    const start = typeof dateStart === 'string' ? parseISO(dateStart) : dateStart;
    const end = typeof dateEnd === 'string' ? parseISO(dateEnd) : dateEnd;

    // Vérifier si les dates sont valides après parsing
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.error('DateRangePipe: Invalid date provided.', { dateStart, dateEnd });
        return 'Date invalide';
    }

    // Cas 1: Les dates de début et de fin sont identiques (même jour)
    // Ex: 6 juin 2025
    if (isSameDay(start, end)) {
      return format(start, 'd MMMM yyyy', { locale: fr });
    }

    // Cas 2: Les dates sont dans le même mois et la même année
    // Ex: 15–17 mai 2025
    if (isSameMonth(start, end) && isSameYear(start, end)) {
      return `${format(start, 'd', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
    }

    // Cas 3: Les dates sont dans la même année mais des mois différents
    // Ex: 30 juin–5 juillet 2025
    if (isSameYear(start, end)) {
      return `${format(start, 'd MMMM', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
    }

    // Cas 4: Les dates sont dans des années différentes
    // Ex: 30 décembre 2024–5 janvier 2025
    return `${format(start, 'd MMMM yyyy', { locale: fr })} – ${format(end, 'd MMMM yyyy', { locale: fr })}`;
  }

}
