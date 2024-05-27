import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopModule } from '../top/top.module';
import { ContentModule } from '../content/content.module';
import { LoginModule } from '../auth/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { TopMenuComponent } from '../top/top-menu/top-menu.component';
import { MainContentComponent } from '../content/main-content/main-content.component';
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TopMenuComponent,
    MainContentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    TopModule,
    ContentModule
  ],
  providers: [],
  exports: [
    MainPageComponent,
    TopMenuComponent,
    MainContentComponent
  ]
})
export class MainPageModule { }
