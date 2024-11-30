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

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService],
})
export class RegisterComponent {
  private _AuthApiService = inject(AuthApiService);
  private _router = inject(Router);

  isLoading: boolean = false;
  constructor(private messageService: MessageService) {}

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{6,}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{6,}$/),
    ]),
    phone: new FormControl(null, [Validators.required]),
  });

  get f() {
    return this.registerForm.controls;
  }

  displayMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      detail: `Account Created ${message}`,
    });
  }

  register() {
    this.isLoading = true;
    this._AuthApiService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
      this.displayMessage(res.message);
      this._router.navigate(['/login']);
    });
  }
}
