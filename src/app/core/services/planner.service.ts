import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { PLANNER_TYPES } from 'src/app/shared/constants/planner-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlannerService {

  private baseUrlPlanner = environment.baseUrl + "planners";
  private http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  getPlannerById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrlPlanner + `/${id}`, this.httpOptions)
  }

  getPlannerMenus(): Observable<any> {
    return this.http.get<any>(this.baseUrlPlanner + "/types").pipe(
      map(({ status, data, message }) => data),
      map(data =>
        data.map((dat: any) => {
          return {
            ...dat,
            isActive: false
          }
        })
      ),
      tap(res => console.log(res))
    )
  }

  getPlanners(queryParams?: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPlanner}?${queryParams}`).pipe(
      map(({ status, data, message }) => data),
      map((planners) => planners.map((planner : any) => {
        const typeMatch = PLANNER_TYPES.find(t => t.type === planner.type);
        return {
          ...planner,
          color: typeMatch?.color || '#999', // couleur par défaut si non trouvé
          typeName: typeMatch?.label || ''
        };
      })))
  }
}
