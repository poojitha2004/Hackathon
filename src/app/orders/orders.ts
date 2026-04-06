import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.html'
})
export class Orders {

  cart: any[] = [];
  orders: any[] = [];

  // 👇 NEW USER DETAILS
  user = {
    name: '',
    address: '',
    payment: 'COD'
  };

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    this.orders = JSON.parse(localStorage.getItem("orders") || "[]");
  }

 placeOrder() {

  if (this.cart.length === 0) return;

  // ❗ validation
  if (!this.user.name || !this.user.address) {
    alert("Please fill all details");
    return;
  }

  let newOrder = {
    id: Date.now(),
    user: { ...this.user },   // ✅ FIX (copy object properly)
    items: [...this.cart],    // ✅ FIX (avoid reference issue)
    total: this.cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  };

  this.orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(this.orders));

  localStorage.removeItem("cart");
  this.cart = [];

  // reset form
  this.user = { name: '', address: '', payment: 'COD' };

  alert("Order placed successfully ✅");
}
}
