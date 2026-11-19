import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin(): void {
    const isValidUser = this.authService.signIn(this.user);
    if (isValidUser) {
      this.erreur = 0;
      this.router.navigate(['/']);
    } else {
      this.erreur = 1;
    }
  }
}
