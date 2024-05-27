import { Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth-guard';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main-page',
    component: MainPageComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'support', 
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];
