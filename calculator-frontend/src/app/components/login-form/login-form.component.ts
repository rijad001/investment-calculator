import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  loginData = {
    username: '',
    password: '',
  };

  errorMessage: string | null = null;
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.errorMessage = null;
    this.authService
      .login(this.loginData.username, this.loginData.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/investment-form']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'There was an error';
        },
      });
  }
}
