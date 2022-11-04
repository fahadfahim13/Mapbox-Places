import slice from './slice';

const {
  getAllCities,
  filterCitiesWithType,
  selectCity,
  sortAscCities,
  sortDescCities,
} = slice.actions;
export { getAllCities, filterCitiesWithType, selectCity, sortAscCities, sortDescCities };
