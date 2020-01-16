import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private url = "http://localhost:8080/addresses"

  constructor(private http: Http) { }


  getAll() {
    return this.http.get(this.url);
  }

  insertAddress(address) {
    return this.http.post(this.url, address);
  }

  getByCityId(id) {
    return this.http.get(this.url+"/"+id);
  }

  getById(id) {
    return this.http.get(this.url + "/byid/"+id);
  }
}
