import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-c1d9.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  constructor() { }

  public getConnectionString()
  {
    return this.prod_host;
  }
}
