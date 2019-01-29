import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../userAuth.service';
import {User} from '../user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  // providers: [UserAuthService],
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  emailAddress: string;
  passwordSet: string;
  headers: string[];
  cookieValue: string;

  constructor(private authService: UserAuthService,
              private http: HttpClient,
              private myRoute: Router) {
  }

  ngOnInit() {
  }

  setValue(email: string, password: string) {

    email = email.trim();
    password = password.trim();

    const newUser: User = {email, password} as User;
    this.authService.addUser(newUser)
      .subscribe(resp => {

        // display headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        for (const key of keys) {
          if (key === 'auth-cookie') {
            this.cookieValue = resp.headers.get(keys[11]).split(';')[0];
            document.cookie = this.cookieValue;

            this.authService.sendToken(this.emailAddress);
            this.myRoute.navigate(['home']);
          }
        }
      });

  }


}
