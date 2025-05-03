import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImgResponse} from '../Interfaces/ApiResponses/img-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsImageService {

  constructor(private http: HttpClient) {

  }

  public async GetProductImages(productId: number): Promise<Observable<ImgResponse[]>> {
    let params = new HttpParams().set("productId", productId);
    return this.http.get<ImgResponse[]>('https://valentintolstikov-petshopapi-2ad0.twc1.net/Image/Product', {params: params});
  }
}
