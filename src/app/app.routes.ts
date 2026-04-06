import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Orders } from './orders/orders';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart },
  { path: 'orders', component: Orders }
];
