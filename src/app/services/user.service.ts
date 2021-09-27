import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  usersList: User[] = [
    new User('Mani', 15, 'mani@test.com'),
    new User('Arvin', 14, 'arvin@test.com'),
    new User('Radin', 12, 'radin@test.com'),
  ];

  public getUsers(): User[] {
    return this.usersList;
  }

  public addUser(newUser: User) {
    this.usersList.push(newUser);
  }
}
