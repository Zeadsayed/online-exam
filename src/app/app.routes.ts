import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/auth/auth.component').then((c) => c.AuthComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./core/pages/forget-password/forget-password.component').then(
            (c) => c.ForgetPasswordComponent
          ),
      },
      {
        path: 'verify',
        loadComponent: () =>
          import('./core/pages/verify/verify.component').then(
            (c) => c.VerifyComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./core/pages/set-password/set-password.component').then(
            (c) => c.SetPasswordComponent
          ),
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
  },
];
