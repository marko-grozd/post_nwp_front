import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  latitude = 51.678418;
  longitude = 7.809007;
  
  constructor() { }

  ngOnInit() {
  }

}
