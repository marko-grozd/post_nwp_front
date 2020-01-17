import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { fromEventPattern } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { AddressesComponent } from '../addresses/addresses.component';
import { AddressesService } from '../services/addresses.service';
import { Adresa } from '../models/adresa';
import { Korisnik } from '../models/korisnik';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  userForm; addressName=""; //appears on html
  private adresa: Adresa;

  constructor(private dialogRef: MatDialogRef<AddNewUserComponent>, private dialog: MatDialog,
    private adrServ: AddressesService, private userService: UsersService) {
    this.userForm = new FormGroup({
      ime: new FormControl(),
      prezime: new FormControl(),
      email: new FormControl(),
      broj_telefona: new FormControl(),
      kucni_broj: new FormControl(),
      broj_lk: new FormControl()
    });
   }

  ngOnInit() {
  }

  closeWindow() {
      this.dialogRef.close();
  }

  onSubmit(userForm) {
   var korisnik = new Korisnik(0, userForm.broj_lk, userForm.broj_telefona, userForm.email,
      userForm.ime, userForm.prezime, this.adresa, userForm.kucni_broj);
      this.userService.insertUser(korisnik)
      .subscribe(resp => {
        console.log(resp);
      }, err=> {
        console.log(err);
      });
      this.dialogRef.close();

  }

  insertAddress() {

    this.dialog.open(AddressesComponent)
    .afterClosed().subscribe(resp => {
      this.adresa = resp;
      this.addressName = resp['nazivUlice'];
    });
  }

}
