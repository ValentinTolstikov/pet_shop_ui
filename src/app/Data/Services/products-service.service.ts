import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../Interfaces/ApiResponses/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-2ad0.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

  }

  public async getAllProducts(): Promise<Observable<ProductResponse[]>> {
    let params = new HttpParams().set("page", 1).set("pageSize", 10);
    return this.http.get<ProductResponse[]>(this.dev_host+'Product/GetPage', {params: params});
  }

  public async getProductById(id: number): Promise<Observable<ProductResponse>> {
    let params = new HttpParams().set("page", 1).set("id", id);
    return this.http.get<ProductResponse>(this.dev_host+'Product/Get', {params: params});
  }
}
