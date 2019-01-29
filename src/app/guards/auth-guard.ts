import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from '../auth/userAuth.service';

// import {AuthService} from './auth2.service';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private auth: UserAuthService, private myRoute: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      // navigate to login page
      this.myRoute.navigate(['/login']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }
  }
}
