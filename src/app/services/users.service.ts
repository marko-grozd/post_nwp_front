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

  findById(id) {
    return this.http.get(this.url+"/"+id);
  }

  insertUser(user) {
    return this.http.post(this.url, user);
  }
}
