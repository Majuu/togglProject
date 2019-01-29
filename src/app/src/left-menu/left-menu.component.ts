import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../auth/userAuth.service';

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
    this.authService.logout();
 }


}
