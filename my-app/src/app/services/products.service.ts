import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormProduct, IProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getproducts(): Observable<{ products: IProduct[] }> {
    return this.http.get<{ products: IProduct[] }>(
      'http://localhost:9999/api/products'
    );
  }
  getproduct(id: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      'http://localhost:9999/api/products/' + id
    );
  }
  addproduct(product: any): Observable<IFormProduct> {
    return this.http.post<IFormProduct>(
      'http://localhost:9999/api/products',
      product
    );
  }
  updateProductFavoriteStatus(
    productId: any,
    isFavorited: boolean
  ): Observable<any> {
    const url = `http://localhost:9999/api/products/${productId}`;
    const payload = { isFavorited: isFavorited };
    return this.http.patch(url, payload);
  }
}
