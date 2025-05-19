import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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
    return this.http.get<any>(this.baseUrlPlanner+"/types").pipe(
      map(({ status, data, message }) => data),
      map(data => 
        data.map((dat: any) => { 
          return {...dat,
          isActive: false}
        })
      ),
      tap(res => console.log(res))
    )
  }
  
  getPlannerListByEventType(type: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPlanner}?type=${type}`).pipe(
      map(({ status, data, message }) => data)
    )
  }

}
