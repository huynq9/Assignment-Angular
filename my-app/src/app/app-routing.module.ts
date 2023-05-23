import { CateComponent } from './pages/client/cate/cate.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { LayOutClientComponent } from './layouts/client/lay-out-client/lay-out-client.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { LayOutAdminComponent } from './layouts/admin/lay-out-admin/lay-out-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddComponent } from './pages/admin/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: LayOutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'categories', component: CateComponent },
    ],
  },
  {
    path: 'admin',
    component: LayOutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add', component: AddComponent },
    ],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
