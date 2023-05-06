import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    
    users: any = [];
  
    constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.getData().subscribe((data) => {
        console.log(data);
        this.users = data;
      });
    }

}
