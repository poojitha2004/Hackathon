import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {

  showNavbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // show navbar only after login
        this.showNavbar = event.url !== '/';
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
