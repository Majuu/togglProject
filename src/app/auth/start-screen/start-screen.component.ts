import {Component, OnInit} from '@angular/core';
import {Config, UserAuthService} from '../userAuth.service';
import {User} from '../user.model';
import {HttpClient} from '@angular/common/http';

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
  isLogged: boolean;

  constructor(private authService: UserAuthService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  showFullResponse() {
    this.authService.getFullResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {

        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
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
      });

    // if (typeof this.headers === 'object'){
    //   return this.isLogged = true;
    // } else {
    //   return this.isLogged = false;
    // }
    // console.log()
  }


}
