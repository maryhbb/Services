import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  users: any;
  constructor(private userService: UserService){
    console.log(userService.getUsers())
    this.users = userService.getUsers();
  }


}
