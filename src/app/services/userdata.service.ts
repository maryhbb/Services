import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
user(){
  return [
    {name: 'Mani', age: 15, email: 'mani@test.com'},
    {name: 'Arvin', age: 14, email: 'arvin@test.com'},
    {name: 'Radin', age: 12, email: 'radin@test.com'},
    {name: 'Johannes', age: 38, email: 'johan@test.com'},

  ]
}

}
