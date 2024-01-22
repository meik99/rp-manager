import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import * as path from "path";
import {HomeComponent} from "./main/home/home.component";
import {PagesComponent} from "./admin/pages/pages.component";
import {AdminComponent} from "./admin/admin.component";
import {AssetsComponent} from "./admin/assets/assets.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "app",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      },
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'assets',
        component: AssetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
