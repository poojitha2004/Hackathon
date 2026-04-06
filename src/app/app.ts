import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
   styleUrls: ['./app.css']
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
go(path: string) {
  this.router.navigate(['/' + path]);
}
  logout() {

    this.router.navigate(['/']);
  }
}
