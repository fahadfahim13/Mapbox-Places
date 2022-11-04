import { useState } from 'react';
import { FlyToInterpolator } from 'react-map-gl';

import { City, TravelTypes } from './cities';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  filterCitiesWithType,
  getAllCities,
  selectCity,
  sortAscCities,
  sortDescCities,
} from 'store/Map/actions';
import { selectAllCities, selectedCity, selectedCityIndex } from 'store/Map/selectors';
import { ViewPort } from 'components/MapComponent/types';

const useMapContainer = () => {
  const cities = useAppSelector(selectAllCities);
  const city = useAppSelector(selectedCity);
  const cityIndex = useAppSelector(selectedCityIndex);
  const [sort, setSort] = useState<string | null>(null);

  const [viewport, setViewPort] = useState<ViewPort>({
    latitude: cities[0].latitude,
    longitude: cities[0].longitude,
    zoom: 10,
    transitionDuration: '100',
  });

  const dispatch = useAppDispatch();

  const setViewPortWithCityChange = (city: City) => {
    const { latitude, longitude } = city;
    setViewPort({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 0.005 }),
      transitionDuration: '2000',
    });
  };

  const onSelectCity = (city: City, idx: number) => {
    dispatch(selectCity(idx));
    setViewPortWithCityChange(city);
  };

  const onSelectType = (type: TravelTypes | string) => {
    console.log(type);
    if (type === 'All') {
      dispatch(getAllCities());
    } else {
      dispatch(filterCitiesWithType(type));
    }
  };

  const onPrevClick = () => {
    const idx = (cityIndex ? cityIndex - 1 : cities.length - 1) % cities.length;
    onSelectCity(cities[idx], idx);
  };

  const onNextClick = () => {
    const idx = (cityIndex + 1) % cities.length;
    onSelectCity(cities[idx], idx);
  };

  const sortAsc = () => {
    dispatch(sortAscCities());
    setSort('desc');
  };

  const sortDesc = () => {
    dispatch(sortDescCities());
    setSort('asc');
  };
  return {
    sort,
    sortAsc,
    sortDesc,
    onSelectCity,
    onSelectType,
    viewport,
    setViewPort,
    city,
    onPrevClick,
    onNextClick,
  };
};

export default useMapContainer;
