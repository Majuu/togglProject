import {Component, OnInit} from '@angular/core';
import {Config, UserAuthService} from '../userAuth.service';
import {User} from '../user.model';
import {HttpClient} from '@angular/common/http';
import * as cookies from 'browser-cookies';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  emailAddress: string;
  passwordSet: string;
  headers: string[];
  config: Config;
  allCookies: string;


  constructor(private authService: UserAuthService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  getCookie(c_name) {
    return localStorage.getItem(c_name);
  }

  setCookie(c_name, value, expiredays) {
    return localStorage.setItem(c_name, value);
  }


  logMeIn(email: string, password: string) {

    email = email.trim();
    password = password.trim();

    const newUser: User = {email, password} as User;
    this.authService.logUser(newUser)
      .subscribe(resp => {

        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
        console.log(this.headers);

        // this.getCookie('Set-Cookie');








        // this.allCookies = document.cookie;
        // console.log(this.allCookies);
        // console.log(typeof this.allCookies);
        // console.log(this.allCookies.length);
      });
  }


}
