import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {
  private readonly prod_host: string = 'http://31.130.144.79:8080/';
  private readonly dev_host: string = 'http://localhost:8080/';

  constructor() { }

  public getConnectionString()
  {
    return this.prod_host;
  }
}
