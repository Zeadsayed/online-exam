import { CommonModule } from '@angular/common';
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
import { ToastModule } from 'primeng/toast';
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MainBtnComponent,
    ToastModule,
    CommonModule,
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  providers: [MessageService],
})
export class ForgetPasswordComponent {
  private _AuthApiService = inject(AuthApiService);
  private _router = inject(Router);

  isLoading: boolean = false;
  isSubmitted: boolean = false;
  constructor(private messageService: MessageService) {}

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get f() {
    return this.forgetForm.controls;
  }

  displayAlert() {
    this.messageService.add({
      severity: 'info',
      detail: `Please Fill Form`,
    });
  }

  displayMessage(message: string, status: string) {
    if (status == 'success') {
      this.messageService.add({
        severity: 'success',
        detail: `Login ${message}`,
      });
    }
    if (status == 'error') {
      this.messageService.add({
        severity: 'error',
        detail: `${message}`,
      });
    }
  }

  submit() {
    this.isSubmitted = true;
    if (this.forgetForm.invalid) {
      this.displayAlert();
      return;
    }
    this.isLoading = true;
    this._AuthApiService.forgotPassword(this.forgetForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.displayMessage(res.message, 'success');
        this._router.navigate(['/auth/verify']);
      },
      error: (err) => {
        this.isLoading = false;
        this.displayMessage(err.error.message, 'error');
      },
    });
  }
}
