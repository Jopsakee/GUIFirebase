import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  reactiveForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], [this.emailExists.bind(this)]),
      wachtwoord: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  onSignup() {
    this.authService.signup(this.reactiveForm.value.email, this.reactiveForm.value.wachtwoord)
      .then((response) => {
        if (response == 'success') {
          this.router.navigate(['/login']);
          console.log('Successfully signed up');
        }
        else {
          alert(response);
          console.log('Failed signing up');
        }
      })
  }

  emailExists: AsyncValidatorFn = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'r0902342@student.thomasmore.be') {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  };

  onSubmit(): void {
    console.log(this.reactiveForm);
  }

  buttonIsPressed() {
    return true;
  }

  invalidForm() {
    return true;
  }
}
