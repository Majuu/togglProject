import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../../../userAuth.service';
import {User} from '../../../user.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private authService: UserAuthService) {
  }

  ngOnInit() {
  }

  logMeOut() {

    this.authService.logOutUser();
    this.authService.logout();
  }

}
