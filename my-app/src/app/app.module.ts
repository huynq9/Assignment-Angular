import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/client/header/header.component';
import { LayOutClientComponent } from './pages/client/lay-out-client/lay-out-client.component';
import { HomeComponent } from './pages/client/home/home.component';
import { SliderComponent } from './components/client/slider/slider.component';
import { CardProductComponent } from './components/client/card-product/card-product.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { CardCategoryComponent } from './components/client/card-category/card-category.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
