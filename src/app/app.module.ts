import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaddyComponent } from './paddy/paddy.component';
import { MaizeComponent } from './maize/maize.component';
import { JowarComponent } from './jowar/jowar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BajraComponent } from './bajra/bajra.component';
import { DataService } from './data.service';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { PlacedorderComponent } from './placedorder/placedorder.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaddyComponent,
    MaizeComponent,
    JowarComponent,
    PagenotfoundComponent,
    BajraComponent,
    ShoppingComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    AddressComponent,
    PaymentComponent,
    PlacedorderComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
