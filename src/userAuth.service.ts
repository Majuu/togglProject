import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';
import Post from './post.model';

export interface Config {
  someUrl: string;
  textfile: string;
}

@Injectable()
export class UserAuthService {

  usersUrl = 'http://localhost:5000/auth/register';
  loggingUrl = 'http://localhost:5000/auth/login';
  logOutUrl = 'http://localhost:5000/auth/logout';
  postsUrl = 'http://localhost:5000/tasks';
  myCookie: string;

  constructor(private http: HttpClient,
              private myRoute: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body',
  };

  httpOptionsWithCookie = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Cookie': document.cookie,
      'Authorization': localStorage.getItem('Authorization'),
    }),
  };


  // REGISTRATION
  addUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user, this.httpOptions);
  }

  // LOGIN
  logUser(user: User): Observable<any> {
    return this.http.post(this.loggingUrl, user, this.httpOptions);
  }

  // LOGOUT NOT WORKING... COOKIES NOT DELETED

  logOutUser(): Observable<any> {
    return this.http.post(this.logOutUrl, this.httpOptionsWithCookie);
  }

  // POST ADD

  addPost(post: Post): Observable<any> {
    return this.http.post(this.postsUrl, post, this.httpOptionsWithCookie);
  }

  getAllPosts() {
    return this.http.get(this.postsUrl);
  }


  // AUTHGUARD

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
    localStorage.removeItem('Authorization');
    this.myRoute.navigate(['login']);
  }

}
