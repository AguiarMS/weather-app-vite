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
      main:
        | "Thunderstorm"
        | "Drizzle"
        | "Rain"
        | "Snow"
        | "Clouds"
        | "Haze"
        | "Smoke"
        | "Clear"
    }
  ];
  dt?: number;
};
