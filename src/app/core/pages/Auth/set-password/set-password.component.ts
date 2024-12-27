import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MainBtnComponent } from '../../../../shared/components/ui/main-btn/main-btn.component';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MainBtnComponent,
    ToastModule,
    CommonModule,
    PasswordModule,
  ],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.css',
  providers: [MessageService],
})
export class SetPasswordComponent {
  private _AuthApiService = inject(AuthApiService);
  private _router = inject(Router);
  private _toastService = inject(ToastService);

  isLoading: boolean = false;
  isSubmitted: boolean = false;
  constructor(private messageService: MessageService) {}

  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required]),
  });

  get f() {
    return this.resetForm.controls;
  }
  reset() {
    this.isSubmitted = true;
    if (this.resetForm.invalid) {
      this._toastService.showToast('Please Fill Form', 'warn');
      return;
    }
    this.isLoading = true;
    this._AuthApiService.resetPassword(this.resetForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this._toastService.showToast('CHanged Successfully', 'success');
        this._router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.isLoading = false;
        this._toastService.showToast(err.error.message, 'error');
      },
    });
  }
}
