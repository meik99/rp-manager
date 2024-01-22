import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import {LoginService} from "./login/service/login.service";
import {DummyLoginService} from "./login/service/dummy-login.service";
import { PagesComponent } from './admin/pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AssetsComponent } from './admin/assets/assets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    PagesComponent,
    AdminComponent,
    SidebarComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
