import { SubjectsComponent } from './core/pages/subjects/subjects.component';
import { QuizesComponent } from './core/pages/quizes/quizes.component';
import { QuizHistoryComponent } from './core/pages/quiz-history/quiz-history.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
          import('./core/pages/Auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/pages/Auth/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import(
            './core/pages/Auth/forget-password/forget-password.component'
          ).then((c) => c.ForgetPasswordComponent),
      },
      {
        path: 'verify',
        loadComponent: () =>
          import('./core/pages/Auth/verify/verify.component').then(
            (c) => c.VerifyComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./core/pages/Auth/set-password/set-password.component').then(
            (c) => c.SetPasswordComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./core/pages/quizes/quizes.component').then(
            (c) => c.QuizesComponent
          ),
      },
      {
        path: 'quiz-history',
        loadComponent: () =>
          import('./core/pages/quiz-history/quiz-history.component').then(
            (c) => c.QuizHistoryComponent
          ),
      },
      {
        path: 'subjects/:id',
        loadComponent: () =>
          import('./core/pages/subjects/subjects.component').then(
            (c) => c.SubjectsComponent
          ),
      },
    ],
  },
];
