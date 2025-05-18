import { Injectable } from '@angular/core';
import {ServiceBaseService} from './service-base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProductResponse} from '../Interfaces/ApiResponses/product-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendationsServiceService extends ServiceBaseService{

  constructor(private http: HttpClient) {
    super();
  }

  public getReco(count: number): Observable<ProductResponse[]> {
    let params = new HttpParams().set("count", count);
    return this.http.get<ProductResponse[]>(this.getConnectionString()+'Recommendations/GetRecommendations', {params: params});
  }
}
