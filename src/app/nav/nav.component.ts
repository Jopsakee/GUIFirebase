import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private _authService: AuthService){}

  onLogout(): void {
    this._authService.logout();
  }

  get authService(){
    return this._authService;
  }
}
