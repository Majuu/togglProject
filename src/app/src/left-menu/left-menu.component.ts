import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../../../services/userAuth.service';
import {User} from '../../../user/user.model';

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

  showMessage() {
    alert('Menu button clicked, yet nothing happens...');
  }
}

