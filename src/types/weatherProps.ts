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
        main: string;
      }
    ];
    dt?: number;
  };