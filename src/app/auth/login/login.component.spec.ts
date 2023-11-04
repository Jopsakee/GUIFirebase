import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { NavComponent } from '../../nav/nav.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let ngForm: NgForm;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['login']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    ngForm = {
      value: { email: 'test@example.com', wachtwoord: 'password' },
    } as NgForm;

    TestBed.configureTestingModule({
      declarations: [LoginComponent, HeaderComponent, NavComponent, FooterComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully', fakeAsync(() => {
    authService.login.and.returnValue(Promise.resolve(true));
    component.onLogin(ngForm);

    tick();

    expect(component.invalidLogin).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it('should handle login failure', fakeAsync(() => {
    authService.login.and.returnValue(Promise.resolve(false));
    component.onLogin(ngForm);

    tick();

    expect(component.invalidLogin).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  }));

  it('should handle login error', fakeAsync(() => {
    authService.login.and.returnValue(Promise.reject('Authentication error'));
    component.onLogin(ngForm);

    tick();

    expect(component.invalidLogin).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  }));
});

