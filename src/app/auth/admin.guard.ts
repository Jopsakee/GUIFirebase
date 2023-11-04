import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ServerService } from '../server.service';
import { AuthService } from './auth.service';
import { admin } from './admin'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private serverService: ServerService, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.serverService.getAdmin(this.authService.getUid())
      .pipe(map(
        (Admin: admin | undefined) => {
          if (Admin) {
            return true;
          }
          else {
            return false;
          }
        }
      ));
  }

}