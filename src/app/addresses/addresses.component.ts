import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { AddressesService } from '../services/addresses.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Adresa } from '../models/adresa';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  private allCities = [];
  addresses = [];
  addressForm;
  private filteredOptions: Observable<Adresa[]>;

  constructor(private cityService: CitiesService, 
    private addressService: AddressesService,
    private dialogRef: MatDialogRef<AddressesComponent>) {
      this.addressForm = new FormControl();
     }

  ngOnInit() {
    this.cityService.getAllCities()
    .subscribe(resp => {
      this.allCities = resp.json();
      this.initAutocomplete();
    }, err => {
      console.log(err);
    });
  }

  initAutocomplete() {
    this.filteredOptions = this.addressForm.valueChanges.pipe(
      startWith(''), 
      map(value => this._filter(value))
    );
  }

  onSelect(idCity) {
    this.addressService.getByCityId(idCity)
    .subscribe(resp => {
      this.addresses = resp.json();
    }); 
  }

  selectStreed(str) {
    this.addressService.getById(str).subscribe(resp => {
      this.dialogRef.close(resp.json());
    });

  }

  private _filter(value): string[] {
    const filterValue = value.toLowerCase();
    return this.addresses.filter(opt => opt.nazivUlice.toLowerCase().indexOf(filterValue) === 0);
  }



}
