import { Component } from '@angular/core';
import { User } from './services/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Service';
  public users: User[];
  user: User;
  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  onSubmit(event) {
    const user: User = new User(
      event.name, 
      event.age, 
      event.email
      );
    this.userService.addUser(user);
  }

  //(I want too keep this option as well to more learn)
  // onRemove(event: { item: User, index: number }) {
  //   this.users.splice(event.index, 1);
  // }

  onRemove(event: User) {
    const idx = this.users.indexOf(event);
    this.users.splice(idx, 1);
  }

  onUpdate(item: User) {
    this.user = item;
  }
}
