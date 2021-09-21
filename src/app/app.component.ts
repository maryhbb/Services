import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  users: any;
  constructor(private userData: UserdataService){
    console.log(userData.user())
    this.users = userData.user();
  }


}
