import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';
import { Router, RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MainBtnComponent,
    RouterLink,
    ToastModule,
    CommonModule,
    PasswordModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService, ToastService],
})
export class LoginComponent {
  private _AuthApiService = inject(AuthApiService);
  private _toastService = inject(ToastService);
  private _router = inject(Router);

  isLoading: boolean = false;
  isSubmitted: boolean = false;

  constructor(private messageService: MessageService) {}

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

  displayAlert() {
    this.messageService.add({
      severity: 'info',
      detail: `Please Fill Form`,
    });
  }

  // displayMessage(message: string, status: string) {
  //   if (status == 'success') {
  //     this.messageService.add({
  //       severity: 'success',
  //       detail: `Login ${message}`,
  //     });
  //   }
  //   if (status == 'error') {
  //     this.messageService.add({
  //       severity: 'error',
  //       detail: `${message}`,
  //     });
  //   }
  // }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.displayAlert();
      return;
    }

    this.isLoading = true;
    this._AuthApiService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        // this.displayMessage(res.message, 'success');
        this._toastService.showToast(res.message, 'success');
        this._router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading = false;
        // this.displayMessage(err.error.message, 'error');
        this._toastService.showToast(err.error.message, 'error');
      },
    });
  }
}
