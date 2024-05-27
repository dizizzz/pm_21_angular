import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  onSubmit(event: Event, email: string, password: string) {
    event.preventDefault()

    if (email && password) {
      this.authService.login(email, password).subscribe(
        (response: any) => {
          // Обробка успішної автентифікації, отримання токену та редірект
          console.log('Login successful!', response);
          localStorage.setItem('token', response.token)
          this.router.navigate(['main-page']);
        },
        (error: Error) => {
          // Обробка помилки автентифікації
          console.error('Login failed!', error);
        }
      );
    } else {
      // Обробка невалідних вхідних даних
      console.error('Invalid email or password.');
    }
  }
  
}
