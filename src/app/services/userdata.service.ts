import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public user(): Array<User> {
    return [
      new User('Mani', 15, 'mani@test.com'),
      new User('Arvin', 14, 'mani@test.com'),
      new User('Radin', 12, 'mani@test.com'),
      new User('Johannes', 38, 'mani@test.com')
    ]
  }

}
