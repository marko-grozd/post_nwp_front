import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {


  private allCities = [];
  letterForm;

  constructor(private cityService: CitiesService, private dialog: MatDialog) {
   }

  ngOnInit() {
    this.cityService.getAllCities()
    .subscribe(resp => {
      console.log(resp);
      this.allCities = resp.json();
    }, err => {
      console.log(err);
    });
  }

  selectrecipient() {

    this.dialog.open(UserComponent);

  }

}
