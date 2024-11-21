import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { APIRes, Res } from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root',
})
export class AuthRegisterAPIAdapter implements Adapter {
  constructor() {}

  adapt(data: APIRes): Res {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
    };
  }
}
