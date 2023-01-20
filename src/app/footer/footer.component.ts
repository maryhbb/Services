import { Component } from '@angular/core';
import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private userService: UserService) {}

  public getUsers(): User[] {
    return this.userService.getUsers();
  }
}
