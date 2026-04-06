import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html'
})
export class Cart {

  cart: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.loadCart();
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
  goToCheckout() {
  this.router.navigate(['/orders']); // ✅ redirect
  }
}
