import { Component, OnInit } from '@angular/core';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-all-letters',
  templateUrl: './all-letters.component.html',
  styleUrls: ['./all-letters.component.css']
})
export class AllLettersComponent implements OnInit {

  allLetters = [];
  displayedColumns = ["preporuceno", "salje", "postaPrijema", "datumPrijema", "prima", "postaDostave"];

  constructor(private service: LettersService) { }

  ngOnInit() {
    this.service.allLetters()
    .subscribe(resp => {
      this.allLetters = resp.json();
    }, err => {
      console.log(err);
    });
  }



}
