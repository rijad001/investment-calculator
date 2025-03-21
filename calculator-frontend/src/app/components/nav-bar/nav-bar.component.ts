import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
constructor(private readonly authService: AuthService){}
isLoggedIn: boolean = false;

ngOnInit() {
  this.authService.isLoggedIn().subscribe(loggedIn => {
    this.isLoggedIn = loggedIn;
  });
}

onLogout(): void {
  this.authService.logout();
}
}
