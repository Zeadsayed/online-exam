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
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';

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

  displayMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      detail: `${message}`,
    });
  }

  displayAlert() {
    this.messageService.add({
      severity: 'info',
      detail: `Please Fill Form`,
    });
  }

  reset() {
    this.isSubmitted = true;
    if (this.resetForm.invalid) {
      this.displayAlert();
      return;
    }
    this.isLoading = true;
    this._AuthApiService
      .resetPassword(this.resetForm.value)
      .subscribe((res) => {
        console.log(res);
        this.isLoading = false;
        this.isSubmitted = false;
        this.displayMessage(res.info);
        this._router.navigate(['/auth/login']);
      });
  }
}
