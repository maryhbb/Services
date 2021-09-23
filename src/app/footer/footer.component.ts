import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userService: UserService) { 
    this.users = userService.getUsers();
  }

  ngOnInit(): void {
  }

}
