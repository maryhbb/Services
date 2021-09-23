import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userData: UserService) { 
    this.users = userData.getUsers();
  }

  ngOnInit(): void {
  }

}
