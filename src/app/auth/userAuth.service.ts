import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';


export interface Config {
  someUrl: string;
  textfile: string;
}

@Injectable()
export class UserAuthService {

  usersUrl = 'http://localhost:5000/auth/register';
  loggingUrl = 'http://localhost:5000/auth/login';

  // private handleError: HandleError;

  constructor(private http: HttpClient,
  ) {
  }

// httpErrorHandler: HttpErrorHandler
// this.handleError = httpErrorHandler.createHandleError('UsersService');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body'
  };

  // REGISTRATION
  addUser(user: User): Observable<User> {
    // console.log(this.usersUrl);
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  // LOGIN
  logUser(user: User): Observable<any> {
    // console.log(this.usersUrl);
    return this.http.post(this.loggingUrl, user, this.httpOptions);
  }

  getFullResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.loggingUrl, {observe: 'response'});
  }
}
