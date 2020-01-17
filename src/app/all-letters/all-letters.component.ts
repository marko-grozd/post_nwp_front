import { Component, OnInit } from '@angular/core';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-all-letters',
  templateUrl: './all-letters.component.html',
  styleUrls: ['./all-letters.component.css']
})
export class AllLettersComponent implements OnInit {

  allLetters = [];

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
