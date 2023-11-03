import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.invalidLogin = false;
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const wachtwoord = form.value.wachtwoord;
    this.authService.login(email, wachtwoord)
      .then((response) => {
        if(!response){
          this.invalidLogin = true;
          console.log(response);
        }
        else{
          this.invalidLogin = false;
          this.router.navigate([''])
        }
      })
  }
}