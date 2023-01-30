import { TweatherIcons } from "../icons/types";

export type WeatherProps = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      icon: string;
      main:TweatherIcons;
    }
  ];
  dt?: number;
  coord: {
    lon: number;
    lat: number;
  }
};
