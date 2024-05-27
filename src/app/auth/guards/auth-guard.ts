import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  canActivate(): boolean {
    // Перевірка наявності та валідності токена
    const token = localStorage.getItem('token');
    if (!token || !this.tokenService.isTokenValid(token)) {
      return false;
    }
    return true;
  }
}
