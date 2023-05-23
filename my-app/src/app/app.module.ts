import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { HeaderComponent } from './components/client/header/header.component';
import { LayOutClientComponent } from './layouts/client/lay-out-client/lay-out-client.component';
import { HomeComponent } from './pages/client/home/home.component';
import { SliderComponent } from './components/client/slider/slider.component';
import { CardProductComponent } from './components/client/card-product/card-product.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { CardCategoryComponent } from './components/client/card-category/card-category.component';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { AddComponent } from './pages/admin/add/add.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { CateComponent } from './pages/client/cate/cate.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { LayOutAdminComponent } from './layouts/admin/lay-out-admin/lay-out-admin.component';
import { NotFoundComponent } from './pages/client/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayOutClientComponent,
    HomeComponent,
    SliderComponent,
    CardProductComponent,
    FooterComponent,
    CardCategoryComponent,
    DashboardComponent,
    AddComponent,
    NavadminComponent,
    LayOutAdminComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule,
    RippleModule,
    ButtonModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
