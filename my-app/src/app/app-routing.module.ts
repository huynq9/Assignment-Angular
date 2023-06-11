import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { LayOutClientComponent } from './layouts/client/lay-out-client/lay-out-client.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayOutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
      { path:'signup', component: SignUpComponent},
      { path:'signin', component: SignInComponent}
    ],
  }, 
  {
    path: 'admin', component: DashboardComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
