import { City } from 'uicontainers/MapContainer/cities';

export interface CityState {
  cities: City[];
  selectedCityIdx: number;
  selectedCity: City;
}
