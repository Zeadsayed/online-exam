import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { InputTextModule } from 'primeng/inputtext';
import { MainBtnComponent } from '../../../../shared/components/ui/main-btn/main-btn.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ToastService } from '../../../../shared/services/toast.service';
import { localStorageKeys } from '../../../../shared/models/localStorageKeys';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MainBtnComponent,
    RouterLink,
    CommonModule,
    PasswordModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private _AuthApiService = inject(AuthApiService);
  private _toastService = inject(ToastService);
  private _router = inject(Router);

  isLoading: boolean = false;
  isSubmitted: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      this._toastService.showToast('Please Fill Form', 'warn');
      return;
    }

    this.isLoading = true;
    this._AuthApiService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._toastService.showToast('login successfully', 'success');
        localStorage.setItem(localStorageKeys.token, res.token);
        this._router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading = false;
        this._toastService.showToast(err.error.message, 'error');
      },
    });
  }
}
