import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, firstValueFrom, map, of} from 'rxjs';
import {ServiceBaseService} from './service-base.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends ServiceBaseService {
  private token: string = "";

  constructor(private http: HttpClient) {
    super();
  }

  public async Auth(Username: string, Password: string): Promise<boolean> {
    let result: boolean = false;

    const task = this.http.post<LoginResponse>(this.getConnectionString()+'Login', {Username: Username, Password: Password});
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

    const task = this.http.post<HttpResponse<any>>(this.getConnectionString()+'Registration', {Username: Username, Password: Password, Email: Email, DateOfBirth: DateBorn});
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

  private setSession(loginResp: LoginResponse) {
    let curDate = new Date();
    curDate.setMinutes(curDate.getMinutes() + 120);
    const expiresAt = curDate.getTime();

    localStorage.setItem('token', loginResp.token);
    localStorage.setItem('role', loginResp.role.toString());
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

  public isAdmin(): boolean {
    let date = localStorage.getItem('expires_at');

    if (typeof date !== "string") {
      return false;
    }

    let exp_date = JSON.parse(date);
    var dt = new Date(exp_date);

    let diff = dt.getTime() - Date.now();

    let dt2 = new Date(diff);
    let test = dt2.getTime();

    return (localStorage.getItem('token') != null) && (localStorage.getItem('token') != '') && (test > 0) && (localStorage.getItem('role') == '0');
  }
}

export class LoginResponse {
  public token: string = '';
  public role: number = 0;
}
