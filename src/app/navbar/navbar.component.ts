import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  providers: [AuthService, AuthGuard],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  loggedIn: boolean = false;
  constructor(private authService: AuthService) {}
  isLoggedIn(): boolean {
    this.loggedIn = this.authService.isLoggedIn();
    return this.loggedIn;
  }
}
