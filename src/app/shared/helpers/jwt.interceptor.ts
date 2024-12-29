import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const jWTInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('auth_token');
  if (token) {
    req = req.clone({
      setHeaders: {
        token: token,
      },
    });
  }
  return next(req);
};
