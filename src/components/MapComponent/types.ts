import { FlyToInterpolator } from "react-map-gl";

export interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
  transitionInterpolator?: FlyToInterpolator;
  transitionDuration?: string;
}