import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../userAuth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  emailAddress: string;
  passwordSet: string;

  constructor(private authService: UserAuthService) { }

  ngOnInit() {
  }

  logMeIn(email: string, password: string) {

    email = email.trim();
    password = password.trim();

    const newUser: User = {email, password} as User;
    this.authService.logUser(newUser)
      .subscribe();
  }

}
