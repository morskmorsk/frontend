import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  email!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    this.authService.register(userData).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}
