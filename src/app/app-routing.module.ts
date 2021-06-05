import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BajraComponent } from './bajra/bajra.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { JowarComponent } from './jowar/jowar.component';
import { MaizeComponent } from './maize/maize.component';
import { OrdersComponent } from './orders/orders.component';
import { PaddyComponent } from './paddy/paddy.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {
    path:"home/:id",component:ShoppingComponent,
    children:[
      {path:"account",component:AccountComponent},
      {path:"orders",component:OrdersComponent},
      {path:"cart",component:CartComponent}
    ]
  },
  {path:"paddy",component:PaddyComponent},
  {path:"maize",component:MaizeComponent},
  {path:"jowar",component:JowarComponent},
  {path:"bajra",component:BajraComponent},
  {path:"shop",component:ShopComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
