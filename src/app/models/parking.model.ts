export interface Parking {
  discriminator: string;
  address: Address;
  spacesCount: number;
  availableSpacesCount: number;
  chargers: any[];
  color: Color;
  pictureId: null;
  id: string;
  name: string;
  description: string;
  location: Location;
  metadata: null;
}

export interface Address {
  street: string;
  house: string;
  city: string;
}

export interface Color {
  rgb: string;
  alpha: number;
}

export interface Location {
  latitude: number;
  longitude: number;
}
