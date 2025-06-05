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

  getArticles(queryParams?: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlBlogArticle}/?${queryParams}`).pipe(
      map(res => res.data),
      map(res => res.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          coverImage: item.coverImage,
          date: item.date,
          hour: item.hour,
          description: item.description,
          content: item.content,
          hasVideo: item.hasVideo,
          videoLink: item.videoLink,
          rubric : item.rubric
        }
      }))
    )
  }

  getBlogArticleById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrlBlogArticle + `/${id}`).pipe(
      map(({ status, data, message }) => data)
    )
  }
}