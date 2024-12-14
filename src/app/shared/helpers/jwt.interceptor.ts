import { HttpInterceptorFn } from '@angular/common/http';

export const jWTInterceptor: HttpInterceptorFn = (req, next) => {
  const token =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('app:token')
      : null;

  // req = req.clone({
  //   setHeaders: {
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGM0NTY3Y2MzZGViYTYwZGQ1YTdlZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0MDk5ODE0fQ.adSYUdi9coLfCA236n_4hdG0uOys50kUoKp1ukD_owk',
  //   },
  // });
  if (token) {
    req = req.clone({
      setHeaders: {
        token: token,
      },
    });
  }
  return next(req);
};
