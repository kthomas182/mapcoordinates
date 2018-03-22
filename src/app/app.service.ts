import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'}),
};

@Injectable ()
/**
 * AppService
 * @class AppService
 */
export class AppService {
  private _mapsSelected;
  get mapsSelected() {
    return this._mapsSelected;
  }

  set mapsSelected(value) {
    this._mapsSelected = value;
  }

  /**
   * @constructor
   */
  constructor (private _http: HttpClient) {
  }

  getMapsSelected (): Observable<any> {
    return Observable.create ((observer) => {
      observer.next (this.mapsSelected);
      observer.complete ();
    });
  }
}
