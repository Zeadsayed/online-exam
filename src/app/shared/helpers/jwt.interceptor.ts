import { HttpInterceptorFn } from '@angular/common/http';

export const jWTInterceptor: HttpInterceptorFn = (req, next) => {
  const token =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('app:token')
      : null;
  if (token) {
    req = req.clone({
      setHeaders: {
        token: token,
      },
    });
  }
  return next(req);
};
