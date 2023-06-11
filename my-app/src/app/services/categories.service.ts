import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<{ categories: any[] }> {
    return this.http.get<any>('http://localhost:9999/api/categories');
  }
  getCategory(id: any): Observable<any> {
    return this.http.get('http://localhost:9999/api/categories/' + id);
  }
}
