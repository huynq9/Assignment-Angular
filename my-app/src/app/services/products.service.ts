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
  addproduct(product: any): Observable<any> {
    return this.http.post<any>('http://localhost:9999/api/products', product);
  }
  removeProduct(id: any): Observable<any> {
    return this.http.delete<any>('http://localhost:9999/api/products/' + id);
  }
  editProduct(id: number | string, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      'http://localhost:9999/api/products/' + id,
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