import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  isTokenValid(token: string): boolean {
    if (!token) {
      return false;
    }
    const tokenData = this.parseToken(token);
    if (!tokenData) {
      return false;
    }
    const currentTime = Math.floor(Date.now() / 1000);

    return tokenData.exp && tokenData.exp > currentTime && tokenData.iat && tokenData.iat <= currentTime;
  }

  parseToken(tokenWithBearer: string): any {
    try {
      const token = tokenWithBearer.includes('Bearer')
        ? tokenWithBearer.split('Bearer ')[1] : tokenWithBearer; 
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData;
    } catch (error) {
      console.error('Error parsing token:', error);
      return null;
    }
  }
}
