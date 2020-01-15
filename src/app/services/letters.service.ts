import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  private url = "http://localhost:8080/letters";

  constructor(private http: Http) { }


  insertLetter(pismo) {
    return this.http.post(this.url, pismo);
  }
}
