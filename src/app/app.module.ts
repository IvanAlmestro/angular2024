import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // HttpClientModule aún es válido
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesManageComponent } from './clothes-manage/clothes-manage.component';
import { ShopClothesComponent } from './shop-clothes/shop-clothes.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesManageComponent,
    ShopClothesComponent,
    CartComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  // Esto debería seguir funcionando
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }