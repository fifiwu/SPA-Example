import { Component, OnInit } from '@angular/core';
import { UserService } from "../providers/user.service";
import { User } from "../Model/user.model";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userResponse: User[];
  constructor(private _userservice: UserService) {
    this.userResponse = [];
  }

  ngOnInit(): void {
    this._userservice.getUsers().subscribe(
      (res) => {
        this.userResponse = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
