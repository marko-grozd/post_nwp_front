import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private url = "http://localhost:8080/cities";

  constructor(private http: Http) { }



  getAllCities() {
    return this.http.get(this.url);
  }
}
