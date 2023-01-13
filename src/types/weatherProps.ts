export type WeatherProps = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
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
        | "Clear";
    }
  ];
  dt?: number;
};
