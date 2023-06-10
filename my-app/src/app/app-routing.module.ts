import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { LayOutClientComponent } from './layouts/client/lay-out-client/lay-out-client.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: LayOutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path:'signup', component: SignUpComponent},
      { path:'signin', component: SignInComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
