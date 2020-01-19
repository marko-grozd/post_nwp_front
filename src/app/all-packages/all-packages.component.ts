import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';
import { Paket } from '../models/paket';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { MapViewComponent } from '../map-view/map-view.component';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {

  allPackages = [];
  displayedColumns = ["salje",
                       "postaPrijema", 
                       "datumPrijema", 
                       "prima", 
                       "postaDostave", 
                       "napomena", 
                       "tezina", 
                       "prikazMapa"];
  constructor(private service: PackagesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getPackages()
    .subscribe(resp => {
        this.allPackages = resp.json();
      }, err => console.log(err));
  }

  showOnMap(lett){
    console.log("ALL PACKAGES");
    console.log(lett);
    console.log("Duzina: " + lett.korisnik1.adresa.grad.geografskaDuzina);
    console.log("Sirina: " + lett.korisnik1.adresa.grad.geografskaSirina);
    const data = { latitude: lett.korisnik1.adresa.grad.geografskaSirina,
    longtitude: lett.korisnik1.adresa.grad.geografskaDuzina };
    this.dialog.open(MapViewComponent, {data}); 
  }

}
