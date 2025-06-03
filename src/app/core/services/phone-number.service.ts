import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PhoneNumberService {

  private baseUrlSubscriber = environment.baseUrl + "phone-registers";
  private http = inject(HttpClient);

  savePhoneNumber(phone: string): Observable<any> {
    return this.http.post<any>(this.baseUrlSubscriber, {phone})
  }
}
