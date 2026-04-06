import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  getProducts() {
    return this.http.get(`${this.baseUrl}/products`);
  }

  addToCart(item: any) {
    return this.http.post(`${this.baseUrl}/cart/add`, item);
  }

  getCart(userId: number) {
    return this.http.get(`${this.baseUrl}/cart/${userId}`);
  }

  placeOrder(order: any) {
    return this.http.post(`${this.baseUrl}/orders`, order);
  }
}
