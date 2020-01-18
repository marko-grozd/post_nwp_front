import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Korisnik } from '../models/korisnik';
import { UserComponent } from '../user/user.component';
import { Paket } from '../models/paket';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packageForm;

  private recipient: Korisnik;
  private sender: Korisnik;


  constructor(private pckgService: PackagesService, private dialog: MatDialog,
    private router: Router) {
      this.packageForm = new FormGroup({
        napomena: new FormControl(),
        tezina: new FormControl(),
      })
     }

  ngOnInit() {
  }

  selectrecipient() {

    this.dialog.open(UserComponent)
    .afterClosed()
    .subscribe(test => {
      if (test != undefined) {
          this.recipient = test;
      } else {
          this.recipient=null;
      }
    });
  }

  selectsender() {

    this.dialog.open(UserComponent)
    .afterClosed()
    .subscribe(test => {
      if (test != undefined) {
        this.sender = test;
      } else {
        this.sender=null; //temporarily fix::TODO
      }
    })
  }

  submitForm(value) {
    var temporarypackageObject: Paket;
    temporarypackageObject = new Paket(
      null, null, value.napomena, value.tezina, this.sender, this.recipient);
      console.log(value);
      console.log(temporarypackageObject);

      this.pckgService.insertPackage(temporarypackageObject)
      .subscribe(res => {
        console.log(res);
      }, err => console.log(err));
  }

}
