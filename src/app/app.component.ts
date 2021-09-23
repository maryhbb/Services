import { Component } from '@angular/core';
import { UserService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  users: any;
  constructor(private userData: UserService){
    console.log(userData.getUsers())
    this.users = userData.getUsers();
  }


}
