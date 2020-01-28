export interface Poi {
  discriminator: string;
  id: string;
  name: string;
  description: string;
  location: Location;
  metadata: Metadata;
  address: Address;
  category: string;
  picture: null;
  color: Color;
}

export interface Address {
  street: null;
  house: null;
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

export interface Metadata {
}
