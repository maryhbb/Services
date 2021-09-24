import { Component } from '@angular/core';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  // public users: User[];
  constructor(private userService: UserService) {
    // this.users = userService.getUsers();
  }

  public getUsers(): User[] {
   return this.userService.getUsers();
  }



}

