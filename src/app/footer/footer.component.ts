import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userData: UserdataService) { 
    this.users = userData.user();
  }

  ngOnInit(): void {
  }

}
