import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CloudinaryService {
  constructor(private _http: HttpClient) {}
  uploadImage(vals: any): Observable<any> {
    let data = vals;
    return this._http.post(
      'https://api.cloudinary.com/v1_1/dwb9qumu6/image/upload',
      data
    );
  }
}
