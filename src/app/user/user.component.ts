import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Korisnik } from '../models/korisnik';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';

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

    this.getUsers();

  }

  getUsers() {

    this.service.getAllUsers()
    .subscribe(resp => {
      this.users = resp.json();
    }, err=> {
      console.log(err);
    });

  }

  btn(ref) {
    this.service.findById(ref)
    .subscribe(resp => {
      this.korisnik = resp.json();
    });
    this.dialogRef.close(this.korisnik);
  }

  closeWindow() {
    this.dialogRef.close();
  }

  openaddnewuserdialog() {
    this.dialog.open(AddNewUserComponent)
    .afterClosed().subscribe(
      resp => this.getUsers()
    );
  }


}








