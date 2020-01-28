import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private httpClient: HttpClient) { }

  getVehicleData(): Observable<any> {
    return this.httpClient.get('https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE');
  }

  getPoiData(): Observable<any> {
    return this.httpClient.get('https://dev.vozilla.pl/api-client-portal/map?objectType=POI');
  }

  getParkingData(): Observable<any> {
    return this.httpClient.get('https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING');
  }
}
