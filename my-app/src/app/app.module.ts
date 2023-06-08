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
import { CarouselModule } from 'primeng/carousel';
import { AddComponent } from './pages/admin/add/add.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayOutAdminComponent } from './layouts/admin/lay-out-admin/lay-out-admin.component';
import { NotFoundComponent } from './pages/client/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './pages/admin/edit/edit.component';
import { ToastModule } from 'primeng/toast';

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
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule,
    RippleModule,
    ButtonModule,
    DropdownModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
