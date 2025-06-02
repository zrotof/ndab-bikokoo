import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  private http = inject(HttpClient);

  private baseUrlBlogMenu = environment.baseUrl + "blog/rubrics";
  private baseUrlBlogArticle = environment.baseUrl + "blog/articles";

  getBlogMenu(): Observable<any> {
    const query = "isActive=true"
    return this.http.get<any>(`${this.baseUrlBlogMenu}/?${query}`).pipe(
      map(({ status, data, message }) => data),
      map(data => {
        return data.map((d: any) => {
          return {
            ...d,
            isActive: false
          }
        })
      }
      )
    )
  }

  getBlogArticlesByMenuId(menuId: string): Observable<any> {

    const queryParam = `rubricId=${menuId}`

    return this.http.get<any>(`${this.baseUrlBlogArticle}/?${queryParam}`).pipe(
      map(({ status, data, message }) => data)
    )
  }

  getBlogArticleById(id : string): Observable<any>{
    return this.http.get<any>(this.baseUrlBlogArticle+`/${id}`).pipe(
      map(({ status, data, message }) => data)
    )
  }
}