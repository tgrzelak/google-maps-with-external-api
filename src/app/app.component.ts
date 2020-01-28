import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchType } from './models/search-type.model';
import { Parking } from './models/parking.model';
import { Poi } from './models/poi.model';
import { Vehicle } from './models/vehicle.model';
import { ApiDataService } from './services/api-data.service';
import { MarkerModalComponent } from './shared/modal/marker-modal/marker-modal.component';
import { MAP_CONFIG } from './shared/_consts/map.config.const';
import { SEARCH_TYPES } from './shared/_consts/search-types.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedValue: SearchType;
  type: typeof SearchType = SearchType;
  searchTypes = SEARCH_TYPES;
  MAP_CONFIG = MAP_CONFIG;

  vehicleData: Vehicle[];
  poiData: Poi[];
  parkingData: Parking[];
  markers: any[] = [];
  poiCategories: string[] = [];
  vehicleTypes: string[] = [];
  selectedVehicleType: string;

  constructor(
    private apiDataService: ApiDataService,
    public modal: MatDialog
  ) { }

  ngOnInit() {
    this.apiDataService.getVehicleData().subscribe(data => {
      this.vehicleData = data.objects;
      this.vehicleTypes = [...new Set(this.vehicleData.map(({ type }) => type))];
    });
    this.apiDataService.getPoiData().subscribe(data => {
      this.poiData = data.objects;
      this.poiCategories = [...new Set(this.poiData.map(({ category }) => category))];
    });
    this.apiDataService.getParkingData().subscribe(data => {
      this.parkingData = data.objects;
    });
  }

  onSliderChange(event) {
    this.markers = this.vehicleData
      .filter(data => data.batteryLevelPct >= event.value)
      .filter(data => this.selectedVehicleType ? data.type === this.selectedVehicleType : data);
  }

  onChange(event) {
    switch (event.value) {
      case SearchType.VEHICLE:
        this.markers = this.vehicleData;
        break;
      case SearchType.PARKING:
        this.markers = this.parkingData;
        break;
      case SearchType.POI:
        this.markers = this.poiData;
        break;
      case SearchType.SHOW_ALL:
        this.markers = [...this.vehicleData, ...this.parkingData, ...this.poiData];
        break;
      default:
        break;
    }
  }

  onVehicleTypeChange(event) {
    this.selectedVehicleType = event.value;
    this.markers = this.vehicleData.filter(x => x.type === event.value);
  }

  onPoiCategoryChange(event) {
    this.markers = this.poiData.filter(x => x.category === event.value);
  }

  setOpacityBaseOnStatus(id: string): number {
    if (this.selectedValue === SearchType.VEHICLE) {
      const x = this.vehicleData.filter(data => data.id === id);
      return x[0].status === 'AVAILABLE' ? 1 : 0.4;
    } else {
      return 1;
    }
  }

  openMarkerModal(id: string): void {
    let data;
    let dialogRef;

    const allData = [...this.parkingData, ...this.vehicleData, ...this.poiData];
    data = allData.filter(x => x.id === id);
    dialogRef = this.modal.open(MarkerModalComponent, {
      width: '450px',
      data: {
        discriminator: data[0].discriminator,
        name: data[0].name,
        description: data[0].description,
        address: data[0].address,
        spacesCount: data[0].spacesCount ? data[0].spacesCount : null,
        availableSpacesCount: data[0].availableSpacesCount ? data[0].availableSpacesCount : null,
        platesNumber: data[0].platesNumber ? data[0].platesNumber : null,
        sideNumber: data[0].sideNumber ? data[0].sideNumber : data[0].sideNumber,
        rangeKm: data[0].rangeKm ? data[0].rangeKm : null,
        batteryLevelPct: data[0].batteryLevelPct ? data[0].batteryLevelPct : null,
        color: data[0].color ? data[0].color : null,
        status: data[0].status ? data[0].status : null,
        category: data[0].category ? data[0].category : null,
      }
    });
    dialogRef.afterClosed();
  }
}
