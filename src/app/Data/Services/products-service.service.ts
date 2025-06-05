import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../Interfaces/ApiResponses/product-response';
import {ServiceBaseService} from './service-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService extends ServiceBaseService{

  constructor(private http: HttpClient) {
    super();
  }

  public async getAllProducts(filter: string | null = null): Promise<Observable<ProductResponse[]>> {
    let params = new HttpParams().set("page", 1).set("pageSize", 10);

    if(filter !== null && filter.length > 0) {
      params = params.set("category", filter);
    }

    return this.http.get<ProductResponse[]>(this.getConnectionString()+'Product/GetPage', {params: params});
  }

  public async getProductById(id: number): Promise<Observable<ProductResponse>> {
    let params = new HttpParams().set("page", 1).set("id", id);
    return this.http.get<ProductResponse>(this.getConnectionString()+'Product/Get', {params: params});
  }

  public async search(request: string): Promise<Observable<ProductResponse[]>> {
    let params = new HttpParams().set("request", request);
    return this.http.get<ProductResponse[]>(this.getConnectionString()+'Product/Search', {params: params});
  }
}
