import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';

export interface Config {
  someUrl: string;
  textfile: string;
}

@Injectable()
export class UserAuthService {

  usersUrl = 'http://localhost:5000/auth/register';
  loggingUrl = 'http://localhost:5000/auth/login';


  constructor(private http: HttpClient,
              private myRoute: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body',
  };

  // REGISTRATION
  addUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user, this.httpOptions);
  }

  // LOGIN
  logUser(user: User): Observable<any> {
    return this.http.post(this.loggingUrl, user, this.httpOptions);
  }


  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    return localStorage.getItem('LoggedInUser');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }

}
