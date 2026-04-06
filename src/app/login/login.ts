import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  user = { email: '', password: '' };

  constructor(private router: Router) {}

  login() {
    localStorage.setItem("user", "true");
    this.router.navigate(['/products']);
  }
}
