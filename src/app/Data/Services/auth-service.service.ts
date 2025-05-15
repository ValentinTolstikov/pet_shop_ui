import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, firstValueFrom, map, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-68c3.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  private token: string = "";

  constructor(private http: HttpClient) { }

  public async Auth(Username: string, Password: string): Promise<boolean> {
    let result: boolean = false;

    const task = this.http.post<string>(this.prod_host+'Login', {Username: Username, Password: Password});
    const value = await firstValueFrom(task).catch((error) => { result = false; });

    if(value){
      this.setSession(value);
      result = true;
    }

    return result;
  }

  public async Register(Username: string, Password: string, Email: string, DateBorn: Date) {
    let result: boolean = false;
    let done = false;

    const task = this.http.post<HttpResponse<any>>(this.prod_host+'Registration', {Username: Username, Password: Password, Email: Email, DateOfBirth: DateBorn});
    let test = task.pipe(
      map(response => {
        return response === null;
      }),
      catchError(error => {
        return of(false)
      })
    );

    return test;
  }

  private setSession(token: string) {
    let curDate = new Date();
    curDate.setMinutes(curDate.getMinutes() + 30);
    const expiresAt = curDate.getTime();

    localStorage.setItem('token', token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt) );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn(): boolean {
    let date = localStorage.getItem('expires_at');

    if (typeof date !== "string") {
      return false;
    }

    let exp_date = JSON.parse(date);
    var dt = new Date(exp_date);

    let diff = dt.getTime() - Date.now();

    let dt2 = new Date(diff);
    let test = dt2.getTime();

    return (localStorage.getItem('token') != null) && (localStorage.getItem('token') != '') && (test > 0);
  }
}
