import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, TravelTypes } from 'uicontainers/MapContainer/cities';

import { CityState } from './types';

const initialState: CityState = {
  cities: CITIES,
  selectedCity: CITIES[0],
  selectedCityIdx: 0,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getAllCities: (state: CityState) => {
      state.cities = CITIES;
    },
    filterCitiesWithType: (state: CityState, action: PayloadAction<TravelTypes | string>) => {
      state.cities = CITIES.filter((city) => city.type === action.payload);
    },
    selectCity: (state: CityState, action: PayloadAction<number>) => {
      state.selectedCityIdx = action.payload;
      state.selectedCity = state.cities[action.payload];
    },
    sortAscCities: (state: CityState) => {
      const arr = [...state.cities].sort((a, b) => a.city.localeCompare(b.city));
      state.cities = arr;
    },
    sortDescCities: (state: CityState) => {
      const arr = [...state.cities].sort((a, b) => b.city.localeCompare(a.city));
      state.cities = arr;
    },
  },
});

export default citySlice;
