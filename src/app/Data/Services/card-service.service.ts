import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {product_model} from '../Interfaces/product-model.interface';

@Injectable({
  providedIn: 'root'
})

export class CardServiceService {
  constructor(private Http: HttpClient) { }
  getCards() : Observable<product_model>  {
      return this.Http.get<product_model>("https://valentintolstikov-petshopapi-2ad0.twc1.net/Product?page=1&pageSize=1").pipe(catchError(error => {
        console.log(error);
        return [];
      }));
  }
}

