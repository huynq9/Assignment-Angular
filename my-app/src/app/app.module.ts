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

import { CateComponent } from './pages/client/cate/cate.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { CarouselModule } from 'primeng/carousel';
import { AddComponent } from './pages/admin/add/add.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayOutAdminComponent } from './layouts/admin/lay-out-admin/lay-out-admin.component';
import { NotFoundComponent } from './pages/client/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './pages/admin/edit/edit.component';
import { ToastModule } from 'primeng/toast';

import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Cloudinary } from 'cloudinary-core';
import { InputSwitchModule } from 'primeng/inputswitch';

const cloudinaryConfiguration = {
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
};

const cloudinary = {
  Cloudinary: Cloudinary,
};
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
    SignUpComponent,
    SignInComponent,
    ProductDetailComponent,
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
    ToolbarModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    ImageModule,
    TagModule,
    DialogModule,
    ConfirmDialogModule,
    RatingModule,
    RadioButtonModule,
    DropdownModule,
    FileUploadModule,
    NgxDropzoneModule,
    InputSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
