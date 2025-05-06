import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-2ad0.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  private token: string = "";

  constructor(private http: HttpClient) { }

  public async Auth(Username: string, Password: string): Promise<boolean> {
    let result: boolean = false;

    const task = this.http.post<string>(this.dev_host+'Login', {Username: Username, Password: Password});
    const value = await firstValueFrom(task).catch((error) => { result = false; });

    if(value){
      this.setSession(value);
      result = true;
    }

    return result;
  }

  private setSession(token: string) {
    //const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('token', token);

    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('token');
    //localStorage.removeItem("expires_at");
  }

  public isLoggedIn(): boolean {
    return (localStorage.getItem('token') != null) && (localStorage.getItem('token') != '');
  }
}
