import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  
})
export class Products {

  selectedCategory = '';
  selectedBrand = '';

  products = [
    { id:1, name: 'Pizza 🍕', price: 200, category: 'Food', brand: 'Dominos', packaging: 'Box' },
    { id:2, name: 'Burger 🍔', price: 150, category: 'Food', brand: 'KFC', packaging: 'Wrap' },
    { id:3, name: 'Coke 🥤', price: 50, category: 'Drinks', brand: 'CocaCola', packaging: 'Bottle' },
    { id:4, name: 'Bread 🍞', price: 80, category: 'Food', brand: 'Britannia', packaging: 'Packet' }
  ];

  cart: any[] = [];

  get filteredProducts() {
    return this.products.filter(p =>
      (this.selectedCategory === '' || p.category === this.selectedCategory) &&
      (this.selectedBrand === '' || p.brand === this.selectedBrand)
    );
  }

  addToCart(p: any) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  let existing = cart.find((item: any) => item.id === p.id);

  if (existing) {
    existing.qty += 1;   // ✅ increase qty
  } else {
    cart.push({ ...p, qty: 1 }); // ✅ new item
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}
}

