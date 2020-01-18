import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { UserComponent } from '../user/user.component';
import { Korisnik } from '../models/korisnik';
import { Pismo } from '../models/pismo';
import { LettersService } from '../services/letters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {


  private recipient: Korisnik;
  private sender: Korisnik;
  letterForm;

  constructor(private cityService: CitiesService, private dialog: MatDialog,
    private letterService: LettersService, private router: Router) {
    this.letterForm = new FormGroup({
      recommended: new FormControl()
    });
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

  onSubmit(value) {
    var pismo = new Pismo(value.recommended, 'null', 'null', this.recipient, this.sender);
    this.letterService.insertLetter(pismo)
    .subscribe(resp => {
      if (resp.ok) {
        this.router.navigate(['/allLetters']);
      }
    }, err => {
      console.log(err)
    });
  }
}
