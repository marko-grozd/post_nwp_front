import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users=[];



  constructor(private service: UsersService) { }

  ngOnInit() {

    this.service.getAllUsers()
    .subscribe(resp => {
      this.users = resp.json();
    }, err=> {
      console.log(err);
    })

  }

}
