import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from '../../userAuth.service';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private auth: UserAuthService, private myRoute: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.myRoute.navigate(['/login']);
      return false;
    }
  }
}
