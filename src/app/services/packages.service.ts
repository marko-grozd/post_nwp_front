import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private url = "http://localhost:8080//packages";

  constructor(private http: Http) { }

  getPackages(){
    return this.http.get(this.url);
  }

  insertPackage(pack) {
    return this.http.post(this.url, pack);
  }
}
