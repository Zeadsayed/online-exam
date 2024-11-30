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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  private _AuthApiService = inject(AuthApiService);
  private _router = inject(Router);

  isLoading: boolean = false;
  constructor(private messageService: MessageService) {}

  displayMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      detail: `Login ${message}`,
    });
  }

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
    this.isLoading = true;
    this._AuthApiService.login(this.loginForm.value).subscribe((res) => {
      this.isLoading = false;
      this.displayMessage(res.message);
      this._router.navigate(['/home']);
    });
  }
}
