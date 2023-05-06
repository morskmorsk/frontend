import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  constructor(private usersService: UsersService) { }

  users: any = [];

  ngOnInit() {
    this.usersService.getData().subscribe((response: any) => {
      console.log('API response:', response);
      const usersUrl = response.users;
      if (usersUrl) {
        this.usersService.getUsers(usersUrl).subscribe((usersResponse: any) => {
          console.log('Users response:', usersResponse);
          this.users = usersResponse.results || usersResponse;
        });
      }
    });
  }
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    // is_superuser: new FormControl(false),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.usersService.registerUser(this.registerForm.value).subscribe(
        (response: any) => {
          console.log('User registered successfully:', response);
          // You can handle the successful registration here, e.g., show a success message or redirect to another page
        },
        (error: any) => {
          console.error('Error registering user:', error);
          // You can handle the error here, e.g., show an error message
        }
      );
    } else {
      // Show an error message or highlight the invalid fields
    }
  }
}
