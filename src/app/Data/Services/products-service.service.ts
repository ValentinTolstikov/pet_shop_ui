import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../Interfaces/ApiResponses/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) {

  }

  public async getAllProducts(): Promise<Observable<ProductResponse[]>> {
    let params = new HttpParams().set("page", 1).set("pageSize", 10);
    return this.http.get<ProductResponse[]>('https://valentintolstikov-petshopapi-2ad0.twc1.net/Product/GetPage', {params: params});
  }

  public async getProductById(id: number): Promise<Observable<ProductResponse>> {
    let params = new HttpParams().set("page", 1).set("id", id);
    return this.http.get<ProductResponse>('https://valentintolstikov-petshopapi-2ad0.twc1.net/Product/Get', {params: params});
  }
}
