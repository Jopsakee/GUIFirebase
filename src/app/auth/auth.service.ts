import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth'
import { ServerService } from '../server.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string | null = null;


  constructor(private router: Router, private auth: Auth, private serverService: ServerService) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }
  signup(email: string, wachtwoord: string): Promise<string> {
    return createUserWithEmailAndPassword(this.auth, email, wachtwoord)
      .then(() => {
        return 'success';
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          return 'Email is already in use';
        } else {
          console.log(error);
          return 'An error occurred while signing up';
        }
      });
  }


  login(email: string, wachtwoord: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, wachtwoord)
      .then(() => {
        this.auth.currentUser?.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
              this.router.navigate(['/home']);
            }
          );
        return true;
      })
      .catch(
        error => {
          console.log(error);
          return false;
        }

      );
  }

  logout(): void {
    this.auth.signOut();
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.token != null;
  }

  isLoggedOut(): boolean {
    return this.token == null;
  }

  getUid() {
    if (this.auth.currentUser) {
      return this.auth.currentUser.uid;
    }
    else {
      return null;
    }
  }



}