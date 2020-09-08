import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../Model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  getUsers(){
    return this._httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
