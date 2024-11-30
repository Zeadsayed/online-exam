import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndpoint } from './enums/AuthApi.endpoints';
import { AuthAPIAdapter } from './adapter/auth-api.adapter';
import { LoginUser } from './interfaces/login';
import { APIRes, Res } from './interfaces/loginRes';
import { AuthRegisterAPIAdapter } from './adapter/auth-register-api.adapter copy';
import { RegisterUser } from './interfaces/register';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthAPI {
  private _http = inject(HttpClient);
  private _AuthAPIAdapter = inject(AuthAPIAdapter);
  private _AuthRegisterAPIAdapter = inject(AuthRegisterAPIAdapter);

  baseURL!: string;

  ngOnInit() {}

  set setBaseURL(url: string) {
    this.baseURL = url;
  }

  login(data: LoginUser): Observable<Res> {
    const api = `${AuthEndpoint.LOGIN}`;
    return this._http
      .post(api, data)
      .pipe(map((res: any) => this._AuthAPIAdapter.adapt(res)));
  }

  register(data: RegisterUser): Observable<Res> {
    const api = `${AuthEndpoint.REGISTER}`;
    return this._http
      .post(api, data)
      .pipe(map((res: any) => this._AuthRegisterAPIAdapter.adapt(res)));
  }

  forgotPassword(data: any): Observable<any> {
    const api = `${AuthEndpoint.FORGOT_PASSWORD}`;
    return this._http.post(api, data);
  }

  verify(data: any): Observable<any> {
    const api = `${AuthEndpoint.VERIFY_CODE}`;
    return this._http.post(api, data);
  }

  resetPassword(data: any): Observable<any> {
    const api = `${AuthEndpoint.RESET_PASSWORD}`;
    return this._http.put(api, data);
  }
}
