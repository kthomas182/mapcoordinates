import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  maps = [
    {value: '{32.779091, -96.800270}', viewValue: 'Dallas'},
    {value: '{37.7612757,-122.4714197}', viewValue: 'San Francisco'},
    {value: '{41.8339042,-88.0121518}', viewValue: 'Chicago'},
  ];
  selected;
  map = new FormControl();
  mapsFromService;
  constructor(private _appService: AppService) {

  }
  changeCoordinates (event) {
    console.log(this.selected)
    this._appService.mapsSelected = this.selected;
  }

  getCoordinates () {
    this._appService.getMapsSelected().subscribe (
      (res) => {
        this.mapsFromService = res;
      }, (err) => {
        console.log(err);
      }, () => {
console.log('COMPLETE - mapsFromService => ', JSON.stringify(this.mapsFromService));
      },
    );
  }
}
