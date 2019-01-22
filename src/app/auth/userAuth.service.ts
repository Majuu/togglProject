import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { User } from './user.model';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';

@Injectable()
export class UserAuthService {

  usersUrl = 'http://localhost:5000/auth/register';
  private handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) { this.handleError = httpErrorHandler.createHandleError('UsersService'); }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  /** POST: add a new hero to the database */
  addUser (user: User): Observable<User> {
  // console.log(this.usersUrl);
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }

}
