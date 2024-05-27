import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginModule } from './auth/login/login.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { MainPageModule } from './main-page/main-page.module';
import { LoginComponent } from './auth/login/login.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    MainPageModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
