import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';

@Component({
  selector: 'app-verify',
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
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css',
  providers: [MessageService],
})
export class VerifyComponent {
  private _AuthApiService = inject(AuthApiService);
  private _router = inject(Router);

  isLoading: boolean = false;
  isSubmitted: boolean = false;

  constructor(private messageService: MessageService) {}

  verifyForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  get f() {
    return this.verifyForm.controls;
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
    if (this.verifyForm.invalid) {
      this.displayAlert();
      return;
    }
    this.isLoading = true;
    this._AuthApiService.verify(this.verifyForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.displayMessage(res.message, 'success');
        this._router.navigate(['/auth/reset-password']);
      },
      error: (err) => {
        this.isLoading = false;
        this.displayMessage(err.error.message, 'error');
      },
    });
  }
}
