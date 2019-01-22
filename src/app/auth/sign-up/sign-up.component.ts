import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserAuthService} from '../userAuth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [UserAuthService],
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  emailAddress: string;
  passwordSet: string;

  constructor(private router: Router,
              private authService: UserAuthService) {
  }

  ngOnInit() {
  }

  setValue(email: string, password: string) {

    email = email.trim();
    password = password.trim();

    const newUser: User = {email, password} as User;
    this.authService.addUser(newUser)
      .subscribe();

  }


}
