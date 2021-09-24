import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usersList: User[] = [
    new User('Mani', 15, 'mani@test.com'),
    new User('Arvin', 14, 'mani@test.com'),
    new User('Radin', 12, 'mani@test.com'),
  ];

  public getUsers(): Array<User> {
    return this.usersList;
  }

  public addUserToList(newUser: User) {
    this.usersList.push(newUser);
  }

}
