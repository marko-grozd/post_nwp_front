import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Korisnik } from '../models/korisnik';
import { UserComponent } from '../user/user.component';
import { Paket } from '../models/paket';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packageForm;
  users = [];

  private recipient: Korisnik;
  private sender: Korisnik;

  show = false;

  constructor(private pckgService: PackagesService, private dialog: MatDialog,
    private router: Router, private korisnikService: UsersService) {
    this.packageForm = new FormGroup({
      napomena: new FormControl(),
      tezina: new FormControl(),
      multiple: new FormControl()
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  clicked() {
    this.show = !this.show;
  }

  getUsers() {
    this.korisnikService.getAllUsers()
      .subscribe(res => {
        this.users = res.json();
      });
  }

  selectrecipient() {

    this.dialog.open(UserComponent)
      .afterClosed()
      .subscribe(test => {
        if (test != undefined) {
          this.recipient = test;
        } else {
          this.recipient = null;
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
          this.sender = null; //temporarily fix::TODO
        }
      })
  }

  submitForm(value) {
    var arr = []; var temporarypackageObject: Paket;
    arr = value.multiple;

    if (arr == null) {
      temporarypackageObject = new Paket(
        null, null, value.napomena, value.tezina, this.sender, this.recipient);


      this.pckgService.insertPackage(temporarypackageObject)
        .subscribe(res => {
          if (res.ok) {
            this.router.navigate(['/allPackages']);
          }
        }, err => console.log(err));
    } else { //if user selected a multiple option then

      arr.forEach(res => {
        this.korisnikService.findById(res)
          .subscribe(r => {
            temporarypackageObject = new Paket(
              null, null, value.napomena, value.tezina, this.sender, r.json());
            this.pckgService.insertPackage(temporarypackageObject)
              .subscribe(res => {
                if (res.ok) {
                }
              }, err => console.log(err));
          });
      });
    }
  }
}