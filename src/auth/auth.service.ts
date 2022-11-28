import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return { msg: 'i have signed in' };
  }
  signUp() {
    return { msg: 'i have signed up' };
  }
}
