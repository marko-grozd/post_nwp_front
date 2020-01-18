import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';

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
                       "tezina"];
  constructor(private service: PackagesService) { }

  ngOnInit() {
    this.service.getPackages()
    .subscribe(resp => {
        this.allPackages = resp.json();
      }, err => console.log(err));
  }

}
