import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users=[];
  private korisnik: Korisnik;

  constructor(private service: UsersService, private dialog: MatDialog, private dialogRef: MatDialogRef<UserComponent>) { }

  ngOnInit() {

    this.service.getAllUsers()
    .subscribe(resp => {
      this.users = resp.json();
    }, err=> {
      console.log(err);
    })

  }

  btn(ref) {
    this.korisnik = new Korisnik('', '', 0);
    this.service.findById(ref)
    .subscribe(resp => {
        this.korisnik.setIme(resp.json()['ime']);
        this.korisnik.setPrezime(resp.json()['prezime']);
        this.korisnik.setId(resp.json()['idKorisnik']);
    });
    this.dialogRef.close(this.korisnik);
  }

  closeWindow() {
    this.dialogRef.close();
  }


}
