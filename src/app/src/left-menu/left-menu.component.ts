import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../../userAuth.service';
import {User} from '../../../user.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private authService: UserAuthService) { }

  ngOnInit() {
  }

 logMeOut() {

    this.authService.logOutUser();
    this.authService.logout();
 }


}


//
//
// logMeIn(email: string, password: string) {
//
//   email = email.trim();
//   password = password.trim();
//
//   const newUser: User = {email, password} as User;
//   this.authService.logUser(newUser)
//     .subscribe(resp => {
//
//       // display headers
//       const keys = resp.headers.keys();
//       this.headers = keys.map(key =>
//         `${key}: ${resp.headers.get(key)}`);
//
//
//       for (const key of keys) {
//         if (key === 'auth-cookie') {
//           this.cookieValue = resp.headers.get(keys[11]).split(';')[0];
//           document.cookie = this.cookieValue;
//
//           this.authService.sendToken(this.emailAddress);
//           this.myRoute.navigate(['home']);
//         }
//       }
//     });
