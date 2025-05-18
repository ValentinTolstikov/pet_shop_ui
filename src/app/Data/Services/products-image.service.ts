import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImgResponse} from '../Interfaces/ApiResponses/img-response';
import {ServiceBaseService} from './service-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsImageService extends ServiceBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public async GetProductImages(productId: number): Promise<Observable<ImgResponse[]>> {
    let params = new HttpParams().set("productId", productId);
    return this.http.get<ImgResponse[]>(this.getConnectionString()+'Image/Product', {params: params});
  }
}
