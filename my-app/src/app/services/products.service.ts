import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getproducts(): Observable<any> {
    return this.http.get('http://localhost:9999/api/products');
  }
  getproduct(id: string): Observable<any> {
    return this.http.get('http://localhost:9999/api/products/' + id);
  }
  addproduct(product: any): Observable<any> {
    return this.http.post<any>('http://localhost:9999/api/products', product);
  }
  
}
