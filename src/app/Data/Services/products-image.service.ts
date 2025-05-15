import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImgResponse} from '../Interfaces/ApiResponses/img-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsImageService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-68c3.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  public async GetProductImages(productId: number): Promise<Observable<ImgResponse[]>> {
    let params = new HttpParams().set("productId", productId);
    return this.http.get<ImgResponse[]>(this.prod_host+'Image/Product', {params: params});
  }
}
