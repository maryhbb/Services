import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './services/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  public users: User[];
  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    age: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  onSubmit() {
    const user: User = new User(this.userForm.value.name, this.userForm.value.age, this.userForm.value.email);
    this.userService.addUserToList(user);
  }


}
