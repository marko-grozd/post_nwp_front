import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:8080/users";

  constructor(private http: Http) { }


  getAllUsers() {
    return this.http.get(this.url);
  }
}
