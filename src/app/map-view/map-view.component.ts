import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  private longtitude:number; private latitude:number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.longtitude = parseFloat(this.data.longtitude);
    this.latitude = parseFloat(this.data.latitude);

    console.log(this.latitude);
    console.log(this.longtitude);
   }

  ngOnInit() {
  }

}
