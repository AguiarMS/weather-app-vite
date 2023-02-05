import { TweatherIcons } from "../../icons/types";
import { Regions } from "../../mock/types";

export interface IRandonLocationData {
  name: string;
  id: string;
  main: {
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    country: Regions;
  };
  weather: [
    {
      main: TweatherIcons;
    }
  ];
  wind: {
    speed: number;
  };
}
