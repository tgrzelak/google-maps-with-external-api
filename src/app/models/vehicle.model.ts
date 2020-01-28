export interface Vehicle {
  discriminator: string;
  platesNumber: string;
  sideNumber: string;
  color: string;
  type: string;
  picture: Picture;
  rangeKm: number;
  batteryLevelPct: number;
  reservationEnd: string;
  reservation: string;
  status: string;
  locationDescription: string;
  address: string;
  mapColor: MapColor;
  promotion: string;
  id: string;
  name: string;
  description: string;
  location: Location;
  metadata: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface MapColor {
  rgb: string;
  alpha: number;
}

export interface Picture {
  id: string;
  name: string;
  extension: null;
  contentType: null;
}
