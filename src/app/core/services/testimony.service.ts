import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  private http = inject(HttpClient)

  private readonly testimonyBaseUrl = environment.baseUrl + "testimonies";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  getTestimoniesList(query : any) : Observable<any>{
    return this.http.get<any>(`${this.testimonyBaseUrl}/?${query}`).pipe(
      map(({status,data, message})=> data)
    )
  }
}
